namespace EvoSystems.Models
{
    public class Funcionario
    {
        public int Id { get; set; }
        public string Foto { get; set; }
        public string Nome { get; set; }
        public int RG { get; set; }
        public Departamento Departamento { get; set; }
    }
}
