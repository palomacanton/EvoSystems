using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using EvoSystems.Models;

namespace EvoSystems.Models
{
    public class FuncionarioRepository : IFuncionarioRepository
    {
        private readonly Context _contexto;

        public FuncionarioRepository(Context ctx)
        {
            _contexto = ctx;
        }

        public void Add(Funcionario funcionario)
        {
            _contexto.Funcionarios.Add(funcionario);
            _contexto.SaveChanges();
        }

        public Funcionario Find(long id)
        {
            return _contexto.Funcionarios.FirstOrDefault(f => f.Id == id);
        }

        public IEnumerable<Funcionario> GetAll()
        {
            return _contexto.Funcionarios.ToList();
        }

        public void Remove(long id)
        {
            var entity = _contexto.Funcionarios.First(f => f.Id == id);
            _contexto.Funcionarios.Remove(entity);
            _contexto.SaveChanges();
        }

        public void Update(Funcionario funcionario)
        {
            _contexto.Funcionarios.Update(funcionario);
            _contexto.SaveChanges();
        }
    }
}
