using EvoSystems.Models;

namespace EvoSystems.Models
{
    public class Auxiliar
    {
        private readonly DepartamentoRepository _departamentoRepository;
        private readonly FuncionarioRepository _funcionarioRepository;

        public Auxiliar(Context dbContext)
        {
            _departamentoRepository = new DepartamentoRepository(dbContext);
            _funcionarioRepository = new FuncionarioRepository(dbContext);
        }
        public void AdicionarDepartamento(Departamento departamento)
        {
            _departamentoRepository.Add(departamento);
        }

        public Departamento EncontrarDepartamento(long id)
        {
            return _departamentoRepository.Find(id);
        }

        public void AdicionarFuncionario(Funcionario funcionario)
        {
            _funcionarioRepository.Add(funcionario);
        }

        public Funcionario EncontrarFuncionario(long id)
        {
            return _funcionarioRepository.Find(id);
        }
    }
}
