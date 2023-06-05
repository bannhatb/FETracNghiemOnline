using MediatR;
using Microsoft.AspNetCore.Http;
using Pbl4.Domain.Entities;
using Pbl4.Domain.Repositories;
using PBL4.WebAPI.Application.Commands.Categories;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace PBL4.WebAPI.Application.Commands.ExamCommands
{
    public class AddExamCommandHandler : IRequestHandler<AddExamCommand, Response<ResponseDefault>>
    {
        private readonly IQuestionRepository _questionRepository;
        private readonly IExamRepository _examRepository;
        private readonly IMediator _mediator;
        private readonly IHttpContextAccessor _httpContext;
        public AddExamCommandHandler(
            IQuestionRepository questionRepository,
            IMediator mediator,
            IExamRepository examRepository,
            IHttpContextAccessor httpContext)
        {
            _questionRepository = questionRepository;
            _mediator = mediator;
            _examRepository = examRepository;
            _httpContext = httpContext;
        }
        public async Task<Response<ResponseDefault>> Handle(AddExamCommand request, CancellationToken cancellationToken)
        {
            string userName = _httpContext.HttpContext.User.Identity.Name.ToString();
            Exam exam = new Exam();
            exam.IsPublic = request.IsPublic;
            exam.LevelId = request.LevelId;
            exam.QuestionCount = request.QuestionCount;
            exam.Title = request.Title;
            exam.Time = request.Time;
            exam.CreateBy = userName;

            _examRepository.Add(exam);

            var result = await _examRepository.UnitOfWork.SaveAsync(cancellationToken);
            if (result == 0)
            {
                return new Response<ResponseDefault>()
                {
                    State = false,
                    Message = ErrorCode.ExcuteDB,
                    Result = new ResponseDefault()
                    {
                        Data = "add exam fail"
                    }
                };
            }

            // Thêm đề thi, danh mục đề thi
            var addExamCategoryCommand = new AddExamCategoryCommand()
            {
                ExamId = exam.Id,
                Categories = request.Categories
            };
            await _mediator.Send(addExamCategoryCommand, cancellationToken);
            return new Response<ResponseDefault>()
            {
                State = true,
                Message = ErrorCode.Success,
                Result = new ResponseDefault()
                {
                    Data = "Add exam success"
                }
            };
        }
    }
}
