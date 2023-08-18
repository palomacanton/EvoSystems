using System.Collections.Generic;
using EvoSystems.Models;

namespace EvoSystems.Models
{
    public interface IDepartamentoRepository
    {
        void Add(Departamento departamento);
        IEnumerable<Departamento> GetAll();
        Departamento Find(long id);
        void Remove(long id);
        void Update(Departamento departamento);
    }
}
