FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
EXPOSE 80
WORKDIR /src
COPY ["PBL4.WebAPI/PBL4.WebAPI.csproj", "PBL4.WebAPI/"]
COPY ["Pbl4.Domain/Pbl4.Domain.csproj", "Pbl4.Domain/"]
RUN dotnet restore "PBL4.WebAPI/PBL4.WebAPI.csproj" \
    && dotnet tool install --global dotnet-ef --version 5.0.0
COPY . .

FROM build AS development
WORKDIR /src/PBL4.WebAPI
CMD dotnet watch run --urls http://0.0.0.0:5000

FROM build AS production
WORKDIR /src/PBL4.WebAPI
RUN dotnet publish "PBL4.WebAPI.csproj" -c Release -o /src/publish
WORKDIR /src/publish
ENTRYPOINT ["dotnet", "PBL4.WebAPI.dll", "--urls", "http://0.0.0.0:80"]