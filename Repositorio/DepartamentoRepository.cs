using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using EvoSystems.Models;

namespace EvoSystems.Models
{
    public class DepartamentoRepository : IDepartamentoRepository
    {
        private readonly Context _contexto;

        public DepartamentoRepository(Context ctx)
        {
            _contexto = ctx;
        }

        public void Add(Departamento departamento)
        {
            _contexto.Departamentos.Add(departamento);
            _contexto.SaveChanges();
        }

        public Departamento Find(long id)
        {
            return _contexto.Departamentos.FirstOrDefault(d => d.Id == id);
        }

        public IEnumerable<Departamento> GetAll()
        {
            return _contexto.Departamentos.ToList();
        }

        public void Remove(long id)
        {
            var entity = _contexto.Departamentos.First(d => d.Id == id);
            _contexto.Departamentos.Remove(entity);
            _contexto.SaveChanges();
        }

        public void Update(Departamento departamento)
        {
            _contexto.Departamentos.Update(departamento);
            _contexto.SaveChanges();
        }
    }
}
