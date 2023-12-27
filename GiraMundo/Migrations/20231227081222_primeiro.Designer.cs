﻿// <auto-generated />
using System;
using GiraMundo.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace GiraMundo.Migrations
{
    [DbContext(typeof(ApiDbContext))]
    [Migration("20231227081222_primeiro")]
    partial class primeiro
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.25")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("GiraMundo.Models.Pacote", b =>
                {
                    b.Property<int>("PacoteId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("varchar(300)");

                    b.Property<int?>("Duracao")
                        .IsRequired()
                        .HasColumnType("int");

                    b.Property<string>("NomePacote")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("varchar(80)");

                    b.Property<decimal?>("Preco")
                        .IsRequired()
                        .HasColumnType("decimal(10,2)");

                    b.HasKey("PacoteId");

                    b.ToTable("Pacotes");
                });

            modelBuilder.Entity("GiraMundo.Models.Pedido", b =>
                {
                    b.Property<int>("PedidoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<DateTime>("DataPedido")
                        .HasColumnType("datetime(6)");

                    b.Property<int>("PacoteId")
                        .HasColumnType("int");

                    b.Property<int>("UsuarioId")
                        .HasColumnType("int");

                    b.HasKey("PedidoId");

                    b.HasIndex("PacoteId");

                    b.HasIndex("UsuarioId");

                    b.ToTable("Pedidos");
                });

            modelBuilder.Entity("GiraMundo.Models.Usuario", b =>
                {
                    b.Property<int>("UsuarioId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("varchar(50)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(80)
                        .HasColumnType("varchar(80)");

                    b.HasKey("UsuarioId");

                    b.ToTable("Usuarios");
                });

            modelBuilder.Entity("GiraMundo.Models.Pedido", b =>
                {
                    b.HasOne("GiraMundo.Models.Pacote", "Pacote")
                        .WithMany("Pedidos")
                        .HasForeignKey("PacoteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("GiraMundo.Models.Usuario", "Usuario")
                        .WithMany("Pedidos")
                        .HasForeignKey("UsuarioId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Pacote");

                    b.Navigation("Usuario");
                });

            modelBuilder.Entity("GiraMundo.Models.Pacote", b =>
                {
                    b.Navigation("Pedidos");
                });

            modelBuilder.Entity("GiraMundo.Models.Usuario", b =>
                {
                    b.Navigation("Pedidos");
                });
#pragma warning restore 612, 618
        }
    }
}
