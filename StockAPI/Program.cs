using Microsoft.EntityFrameworkCore;
using StockAPI.Data;
using StockAPI.Repository;
using StockAPI.Services;

namespace StockAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddDbContext<StockAPIDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("StockAPIDbContext") ?? throw new InvalidOperationException("Connection string 'StockAPIDbContext' not found.")));
            // Add services to the container.
            builder.Services.AddCors(options => {
                options.AddDefaultPolicy(builder => {
                    builder.WithOrigins("http://localhost:4200");
                    //builder.AllowAnyOrigin();
                    builder.AllowAnyMethod();
                    builder.AllowAnyHeader();
                });
            });
            builder.Services.AddScoped<IStockService, StockService>();
            builder.Services.AddScoped<IStockRepository, StockRepository>();
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseCors();
            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}