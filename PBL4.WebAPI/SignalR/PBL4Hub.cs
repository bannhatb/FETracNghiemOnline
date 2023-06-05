using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Pbl4.Domain.Entities;
using Pbl4.Domain.Repositories;
using PBL4.WebAPI.Infrastructure.ModelQueries;
using PBL4.WebAPI.Infrastructure.Queries;
using PBL4.WebAPI.Infrastructure.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;
using System.Timers;

namespace PBL4.WebAPI.SignalR
{
    public class PBL4Hub : Hub
    {
        private readonly IMediator _mediator;
        private readonly IAppQueries _appQueries;
        private readonly IHttpContextAccessor _httpContext;
        private readonly IQuestionRepository _questionRepository;
        private readonly ITestRepository _testRepository;
        public PBL4Hub(IMediator mediator,
            IAppQueries appQueries,
            IHttpContextAccessor httpContext,
            IQuestionRepository questionRepository,
            ITestRepository testRepository)
        {
            _mediator = mediator;
            _appQueries = appQueries;
            _httpContext = httpContext;
            _questionRepository = questionRepository;
            _testRepository = testRepository;
        }
        public async Task presstime(int time)
        {
            /*Task t1 = new Task(
                async () =>
                {
                });
            t1.Start();*/
            string connectionId = getconnectionid();
            int mili = time * 60 * 1000;
            /*System.Timers.Timer myTimer = new System.Timers.Timer(mili);
            myTimer.Elapsed += CallClientStop;
            myTimer.Enabled = true;
            myTimer.Start();*/
            Thread.Sleep(mili);
            await Clients.Client(connectionId).SendAsync("dung");

        }
        public async void CallClientStop(object sender, ElapsedEventArgs e)
        {
            await Clients.Caller.SendAsync("dung");
        }
        public string getconnectionid()
        {
            return Context.ConnectionId;
        }
    }
}
