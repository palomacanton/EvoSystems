using System.Collections.Generic;
using EvoSystems.Models;

namespace EvoSystems.Models
{
    public interface IFuncionarioRepository
    {
        void Add(Funcionario funcionario);
        IEnumerable<Funcionario> GetAll();
        Funcionario Find(long id);
        void Remove(long id);
        void Update(Funcionario funcionario);
    }
}
