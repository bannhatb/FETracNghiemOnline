FROM mcr.microsoft.com/dotnet/aspnet:5.0 AS base
WORKDIR /app
EXPOSE 80

FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build
WORKDIR /src
COPY ["PBL4.WebAPI/PBL4.WebAPI.csproj", "PBL4.WebAPI/"]
RUN dotnet restore "PBL4.WebAPI/PBL4.WebAPI.csproj"
COPY . .
WORKDIR "/src/PBL4.WebAPI"
RUN dotnet build "PBL4.WebAPI.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "PBL4.WebAPI.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "PBL4.WebAPI.dll"]
