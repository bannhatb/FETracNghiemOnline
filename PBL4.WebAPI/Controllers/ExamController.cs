﻿using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Pbl4.Domain.Entities;
using Pbl4.Domain.Repositories;
using PBL4.WebAPI.Application.Commands.ExamCommands;
using PBL4.WebAPI.Application.Commands.QuestionCommands;
using PBL4.WebAPI.Infrastructure.Exceptions;
using PBL4.WebAPI.Infrastructure.ModelDto;
using PBL4.WebAPI.Infrastructure.ModelQueries;
using PBL4.WebAPI.Infrastructure.Queries;
using PBL4.WebAPI.Infrastructure.Response;
using PBL4.WebAPI.Services;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection.Metadata;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(AuthenticationSchemes = "MyAuthKey")]
    [CustomAuthorize(Allows = "Teacher,Admin")]
    public class ExamController : ControllerBase
    {
        private readonly IMediator _mediator;
        private readonly IAppQueries _appQueries;
        private readonly IHttpContextAccessor _httpContext;
        private readonly IExamRepository _examRepository;
        private readonly IQuestionRepository _questionRepository;
        private readonly IWebHostEnvironment _hostingEnvironment; // Ihostingenviroment
        public ExamController(IMediator mediator,
            IExamRepository examRepository,
            IQuestionRepository questionRepository,
            IHttpContextAccessor httpContext,
            IAppQueries appQueries,
            IWebHostEnvironment hostingEnvironment)
        {
            _mediator = mediator;
            _appQueries = appQueries;
            _examRepository = examRepository;
            _httpContext = httpContext;
            _hostingEnvironment = hostingEnvironment;
            _questionRepository = questionRepository;
        }
        [HttpGet]
        [Route("check-authen-techer")]
        public async Task<IActionResult> CheckAuthenTecher()
        {
            return Ok(1);
        }
        [HttpPost]
        [Route("add-exam")]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> AddExam([FromBody]AddExamCommand command)
        {
            if (command == null)
            {
                return BadRequest();
            }   

            var result = await _mediator.Send(command);

            if (result.State)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }

        [HttpPost]
        [Route("update-exam")]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> UpdateExam(UpdateExamCommand command)
        {
            if (command == null)
            {
                return BadRequest();
            }

            var result = await _mediator.Send(command);

            if (result.State)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }

        [HttpPost]
        [Route("delete-exam")]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> DeleteExam([FromBody]int id)
        {
            if(id.ToString() is null)
            {
                return BadRequest(null);
            }
            string userName = _httpContext.HttpContext.User.Identity.Name.ToString();

            var exam = await _examRepository.Exams.FirstOrDefaultAsync(x => x.CreateBy == userName && x.Id == id);
            if (exam is null)
            {
                return NotFound(ErrorCode.NotFound);
            }
            _examRepository.Delete(exam);

            var result = await _examRepository.UnitOfWork.SaveAsync();
            
            if (result > 0)
            {
                return Ok(new Response<ResponseDefault>()
                {
                    State = true,
                    Message = ErrorCode.ExcuteDB,
                    Result = new ResponseDefault()
                    {
                        Data = "Xóa thành công exam"
                    }
                });
            }

            return BadRequest(new Response<ResponseDefault>()
            {
                State = false,
                Message = ErrorCode.ExcuteDB,
                Result = new ResponseDefault()
                {
                    Data = "Lỗi khi xóa exam"
                }
            });
        }

        [HttpGet]
        [Route("exam-detail")]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> QuestionDetail(int examId)
        {
            ExamDetailQueryModel exam = await _appQueries.GetExamDetailById(examId);
            exam.ListCategories = await _appQueries.GetCategoryExam(examId);
            exam.Level = await _appQueries.GetNameLevelExam(examId);
            if (exam == null)
                return BadRequest(new Response<ResponseDefault>()
                {
                    State = false,
                    Message = ErrorCode.ExcuteDB
                });
            return Ok(new Response<ResponseDefault>()
            {
                State = true,
                Message = ErrorCode.Success,
                Result = new ResponseDefault()
                {
                    Data = exam
                }
            });
        }

        [HttpGet]
        [Route("get-list-exam-of-user")]
        [ProducesResponseType(typeof(Response<Pagination<ExamQueryModel>>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> GetListExamOfUser([FromQuery]UrlQuery urlQuery)
        {
            string username = _httpContext.HttpContext.User.Identity.Name;
            List<ExamQueryModel> exams = await _appQueries.GetListExam(username, urlQuery);
            int total = await _appQueries.countListExamUser(username, urlQuery);
            if (exams == null)
                return BadRequest(new Response<ResponseDefault>()
                {
                    State = false,
                    Message = ErrorCode.NotFound
                });
            return Ok(new Response<Pagination<ExamQueryModel>>()
            {
                State = true,
                Message = ErrorCode.Success,
                Result = new Pagination<ExamQueryModel>()
                {
                    Items = exams,
                    Total = total
                }
            });
        }
        /*[HttpGet]
        [Route("get-list-test")]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> GetListTest()
        {
            string username = _httpContext.HttpContext.User.Identity.Name;
            List<ExamQueryModel> exams = await _appQueries.GetListExam(username);
            if (exams == null)
                return BadRequest(new Response<ResponseDefault>()
                {
                    State = false,
                    Message = ErrorCode.ExcuteDB
                });
            return Ok(new Response<ResponseDefault>()
            {
                State = true,
                Message = ErrorCode.Success,
                Result = new ResponseDefault()
                {
                    Data = exams
                }
            });
        }*/
        [HttpGet]
        [Route("get-list-question-of-exam")]
        [ProducesResponseType(typeof(Response<Pagination<QuestionQueryModel>>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> GetQuestionOfExam([FromQuery]int examId, [FromQuery]UrlQuery urlQuery)
        {
            List<QuestionQueryModel> questions = await _appQueries.GetListQuestionInExam(examId, urlQuery);
            int total = await _appQueries.CountGetListQuestionInExam(examId, urlQuery);
            if (questions.Count == 0)
                return Ok(new Response<ResponseDefault>()
                {
                    State = false,
                    Message = ErrorCode.NotFound
                });
            foreach (QuestionQueryModel question in questions)
            {
                question.ListAnswers = await _appQueries.GetAnswerQuestion(question.Id);
            }
            return Ok(new Response<Pagination<QuestionQueryModel>>()
            {
                State = true,
                Message = ErrorCode.Success,
                Result = new Pagination<QuestionQueryModel>()
                {
                    Items = questions,
                    Total = total
                }
            });
        }
        [HttpPost]
        [Route("word-to-exam")]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> WordToExam([FromBody] GenQuestionCommand command)
        {
            if (command == null)
            {
                return BadRequest();
            }

            var result = await _mediator.Send(command);

            if (result.State)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }
        [HttpPost]
        [Route("remove-question-of-exam")]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> RemoveQuestionOfExam(UpdateExamCommand command)
        {
            if (command == null)
            {
                return BadRequest();
            }

            var result = await _mediator.Send(command);

            if (result.State)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }
        [HttpGet]
        [Route("get-list-test-of-exam")]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> GetListTestCreateBySelf([FromQuery] int examId)
        {


            List<ListTestCreate> ListTestCreate = await _appQueries.GetListTestOfExam(examId);
            if (ListTestCreate.Count() == 0)
                return BadRequest(new Response<ResponseDefault>()
                {
                    State = false,
                    Message = ErrorCode.NotFound
                });

            return Ok(new Response<ResponseDefault>()
            {
                State = true,
                Message = ErrorCode.Success,
                Result = new ResponseDefault()
                {
                    Data = ListTestCreate
                }
            });
        }

        [HttpPost]
        [Route("upload-files")]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(Response<ResponseDefault>), StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> UploadMu([FromForm] UploadExam command)
        {
            if (command == null)
            {
                return BadRequest();
            }
            var identity = HttpContext.User.Identity as ClaimsIdentity;

            var result = await _mediator.Send(command);

            if (result.State)
            {
                return Ok(identity.Claims);
            }
            else
            {
                return BadRequest(result);
            }
        }

    }
}
