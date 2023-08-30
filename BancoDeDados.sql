CREATE TABLE [Departamentos] (
    [Id] int NOT NULL IDENTITY,
    [Nome] nvarchar(max) NOT NULL,
    [Sigla] nvarchar(max) NOT NULL,
    CONSTRAINT [PK_Departamentos] PRIMARY KEY ([Id])
);
GO


CREATE TABLE [Funcionarios] (
    [Id] int NOT NULL IDENTITY,
    [Nome] nvarchar(max) NOT NULL,
    [Foto] nvarchar(max) NOT NULL,
    [RG] int NOT NULL,
    [DepartamentoIdId] int NOT NULL,
    CONSTRAINT [PK_Funcionarios] PRIMARY KEY ([Id]),
    CONSTRAINT [FK_Funcionarios_Departamentos_DepartamentoIdId] FOREIGN KEY ([DepartamentoIdId]) REFERENCES [Departamentos] ([Id]) ON DELETE CASCADE
);
GO


CREATE INDEX [IX_Funcionarios_DepartamentoIdId] ON [Funcionarios] ([DepartamentoIdId]);
GO


