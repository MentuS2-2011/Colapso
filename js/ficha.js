// Sistema de Tema (sem localStorage)
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeText = document.getElementById('themeText');
const html = document.documentElement;

let currentTheme = 'dark';
html.setAttribute('data-theme', currentTheme);
updateThemeButton(currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme');
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    currentTheme = newTheme;
    updateThemeButton(newTheme);
});

function updateThemeButton(theme) {
    if (theme === 'dark') {
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Tema Claro';
    } else {
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Tema Escuro';
    }
}

// Dados de subração por raça
const subracasPorRaca = {
    'Humano': ['Humano M-391', 'Humano M-527', 'Humano M-768'],
    'Draconato': ['Draconato Criogenico', 'Draconato Elétrico', 'Draconato Etéreo', 'Draconato Ósseo', 'Draconato Primordial', 'Draconato Pyrocinético'],
    'Slime': ['Slime Azul Cristalino', 'Slime Verde Ácido', 'Slime Vermelho Magma'],
    'Goblin': ['Goblin das Montanhas', 'Goblin Esmeralda', 'Goblin Florestas Altas', 'Goblin Menta'],
    'Orc': ['Meio-orc', 'Orc Colapsados', 'Orc Ossiforo', 'Orc Puro', 'Orc Uruk-hai'],
    'Esqueleto': ['Esqueleto Cinzento', 'Esqueleto de Berserk', 'Esqueleto de Dragur', 'Esqueleto de Ossos Costurados', 'Esqueleto Runificado', 'Esqueleto Tomb Kings', 'Esqueleto Vermelho'],
    'Anão': ['Anão Abissal', 'Anão da Montanha Oca', 'Anão das Cavernas', 'Anão Dwemer'],
    'Inferi': ['Inferi da Dor', 'Inferi de Cinzas', 'Inferi Pecador', 'Inferi Vermelho'],
    'Aeonyx': ['Aeonyx Ascendido'],
    'Elfo': ['Drows', 'Elfo Âmbar', 'Elfos Selvagens', 'Meio Elfos'],
    'Loxodonte': ['Loxodonte da Savana', 'Loxodonte de Cavernas', 'Loxodonte do Mangue'],
    'Leonim': ['Leonim das Savanas', 'Leonim do Sangue Real', 'Leonim do Sol Dourado', 'Leonim do Trono Selvagem']
};

// Dados de subclasse por classe
const subclassesPorClasse = {
    'Mago': ['Escola da Abjuração', 'Escola da Aeromancia', 'Escola da Conjuração', 'Escola da Criação', 'Escola da Criogênia', 'Escola da Eletromancia', 'Escola da Evocação', 'Escola da Geocinese', 'Escola da Gravidade', 'Escola da Hidromancia', 'Escola de Lumos', 'Escola da Mana', 'Escola da Necromancia', 'Escola da Pyromancia', 'Escola de Sangue', 'Escola de Umbra'],
    'Feiticeiro': ['Feiticeiro da Alma Fragmentada', 'Feiticeiro do Caos Primordial', 'Feiticeiro Colapsal', 'Feiticeiro da Herança Divina Esquecida', 'Feiticeiro da Mana Bruta', 'Feiticeiro do Sangue Profano', 'Feiticeiro da Tempestade Viva'],
    'Bruxo': ['Pacto da Corrente', 'Pacto da Lâmina', 'Pacto do Tomo', 'Pacto das Profundezas', 'Pacto Celestial'],
    'Druida': ['Círculo da Lua', 'Círculo da Terra', 'Círculo dos Sonhos', 'Círculo do Fogo Selvagem', 'Círculo das Estrelas'],
    'Xamã': ['Caminho dos Espíritos', 'Caminho dos Ancestrais', 'Caminho Totêmico', 'Caminho Elemental', 'Caminho das Visões'],
    'Clérico': ['Domínio da Vida', 'Domínio da Luz', 'Domínio da Guerra', 'Domínio do Conhecimento', 'Domínio da Tempestade'],
    'Runomante': ['Runas de Fogo', 'Runas de Gelo', 'Runas de Proteção', 'Runas Ancestrais', 'Runas do Destino'],
    'Artificer': ['Alquimista Arcano', 'Forjador de Batalha', 'Artilheiro', 'Mestre de Autômatos', 'Engenheiro Místico'],
    'Alquimista': ['Transmutação', 'Mutagênico', 'Bombas Alquímicas', 'Elixires', 'Venefício Avançado'],
    'Ranger': ['Caçador', 'Mestre das Feras', 'Andarilho das Sombras', 'Vigia das Fronteiras', 'Caçador de Monstros'],
    'Guerreiro': ['Campeão', 'Mestre de Batalha', 'Cavaleiro Arcano', 'Samurai', 'Gladiador'],
    'Paladino': ['Juramento da Devoção', 'Juramento dos Anciões', 'Juramento da Vingança', 'Juramento da Conquista', 'Juramento da Redenção'],
    'Bárbaro': ['Bárbaro da Alcateia Perdida', 'Bárbaro da Fome Eterna', 'Bárbaro do Eco da Ruína', 'Bárbaro do Totem Estilhaçado', 'Bárbaro do Último Bastião', 'Bárbaro do Vazio Interior', 'Bárbaro do Sangue Enferrujado'],
    'Ladino': ['Assassino', 'Ladrão', 'Trapaceiro Arcano', 'Espadachim', 'Inquisidor'],
    'Monge': ['Caminho da Mão Aberta', 'Caminho das Sombras', 'Caminho dos Quatro Elementos', 'Caminho do Sol', 'Caminho do Dragão']
};

// Descrições de alinhamento
const alinhamentosDescricao = {
    'Leal e Bom': 'Criaturas que agem com compaixão e honra, sempre respeitando leis e códigos morais.',
    'Neutro e Bom': 'Fazem o melhor que podem para ajudar os outros de acordo com suas necessidades.',
    'Caótico e Bom': 'Agem seguindo sua consciência, com pouco respeito pelo que os outros esperam.',
    'Leal e Neutro': 'Agem de acordo com a lei, tradição ou código pessoal.',
    'Neutro': 'Não tomam partido, fazendo o que parece melhor no momento.',
    'Caótico e Neutro': 'Seguem seus caprichos, valorizando sua liberdade pessoal acima de tudo.',
    'Leal e Mau': 'Tomam metodicamente o que querem dentro dos limites de seu código.',
    'Neutro e Mau': 'Fazem o que podem se safar, sem compaixão ou escrúpulos.',
    'Caótico e Mau': 'Agem com violência arbitrária, motivados por ganância, ódio ou desejo.'
};

document.querySelectorAll('.proficiencia-header').forEach(header => {
            header.addEventListener('click', function(e) {
                if (e.target.classList.contains('proficiencia-checkbox')) return;
                
                const target = this.dataset.target;
                const container = document.getElementById(target);
                const expand = this.querySelector('.proficiencia-expand');
                
                container.classList.toggle('expanded');
                expand.classList.toggle('expanded');
            });
        });

        // Sistema de Limitação de Armas (5 por tipo)
        document.querySelectorAll('.armas-container').forEach(container => {
            const checkboxes = container.querySelectorAll('.arma-checkbox');
            const countId = 'count-' + container.id;
            const countSpan = document.getElementById(countId);
            
            checkboxes.forEach(checkbox => {
                checkbox.addEventListener('change', function() {
                    const checked = container.querySelectorAll('.arma-checkbox:checked').length;
                    countSpan.textContent = `${checked}/5`;
                    
                    // Desabilitar checkboxes não marcados se atingir o limite
                    if (checked >= 5) {
                        checkboxes.forEach(cb => {
                            if (!cb.checked) {
                                cb.closest('.arma-item').classList.add('disabled');
                            }
                        });
                    } else {
                        checkboxes.forEach(cb => {
                            cb.closest('.arma-item').classList.remove('disabled');
                        });
                    }
                });
            });
        });

        // Sistema de Limitação de Profissões (3 no total)
        const profissoesCheckboxes = document.querySelectorAll('.profissao-checkbox');
        const profissoesCount = document.getElementById('profissoes-count');

        profissoesCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const checked = document.querySelectorAll('.profissao-checkbox:checked').length;
                profissoesCount.textContent = `${checked}/3`;
                
                if (checked >= 3) {
                    profissoesCheckboxes.forEach(cb => {
                        if (!cb.checked) {
                            cb.closest('.profissao-item').classList.add('disabled');
                        }
                    });
                } else {
                    profissoesCheckboxes.forEach(cb => {
                        cb.closest('.profissao-item').classList.remove('disabled');
                    });
                }
            });
        });

// Event Listeners para Raça e Classe
document.getElementById('raca').addEventListener('change', function() {
    const raca = this.value;
    const subracaGroup = document.getElementById('subracaGroup');
    const subracaSelect = document.getElementById('subraca');
    
    if (raca && subracasPorRaca[raca]) {
        // Limpar opções anteriores
        subracaSelect.innerHTML = '<option value="">Selecione...</option>';
        
        // Adicionar novas opções
        subracasPorRaca[raca].forEach(subraca => {
            const option = document.createElement('option');
            option.value = subraca;
            option.textContent = subraca;
            subracaSelect.appendChild(option);
        });
        
        subracaGroup.style.display = 'block';
    } else {
        subracaGroup.style.display = 'none';
        subracaSelect.innerHTML = '<option value="">Selecione...</option>';
    }
});

document.getElementById('classe').addEventListener('change', function() {
    const classe = this.value;
    const subclasseGroup = document.getElementById('subclasseGroup');
    const subclasseSelect = document.getElementById('subclasse');
    
    if (classe && subclassesPorClasse[classe]) {
        // Limpar opções anteriores
        subclasseSelect.innerHTML = '<option value="">Selecione...</option>';
        
        // Adicionar novas opções
        subclassesPorClasse[classe].forEach(subclasse => {
            const option = document.createElement('option');
            option.value = subclasse;
            option.textContent = subclasse;
            subclasseSelect.appendChild(option);
        });
        
        subclasseGroup.style.display = 'block';
    } else {
        subclasseGroup.style.display = 'none';
        subclasseSelect.innerHTML = '<option value="">Selecione...</option>';
    }
});

// Event Listener para Alinhamento
document.getElementById('alinhamento').addEventListener('change', function() {
    const alinhamento = this.value;
    const descricaoDiv = document.getElementById('alinhamentoDescricao');
    
    if (alinhamento && alinhamentosDescricao[alinhamento]) {
        descricaoDiv.textContent = alinhamentosDescricao[alinhamento];
        descricaoDiv.style.display = 'block';
    } else {
        descricaoDiv.style.display = 'none';
    }
});

// Preview de imagem
document.getElementById('imagemGaleria').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('imagePreview').innerHTML = 
                `<img src="${e.target.result}" alt="Preview" style="max-width: 200px; max-height: 200px; border-radius: 8px;">`;
        };
        reader.readAsDataURL(file);
        document.getElementById('imagemUrl').value = '';
    }
});

document.getElementById('imagemUrl').addEventListener('input', function() {
    const url = this.value;
    if (url) {
        document.getElementById('imagePreview').innerHTML = 
            `<img src="${url}" alt="Preview" style="max-width: 200px; max-height: 200px; border-radius: 8px;">`;
        document.getElementById('imagemGaleria').value = '';
    }
});

// Sistema de Status com sistema de gangorra
let pontosStatus = 8;
let atributosValores = {
    forca: 0,
    destreza: 0,
    constituicao: 0,
    inteligencia: 0,
    sabedoria: 0,
    carisma: 0
};

// Atualizar visualização dos pontos
function atualizarPontosDisponiveis() {
    document.getElementById('pontosDisponiveis').textContent = pontosStatus;
}

// Atualizar pontos de perícia para um status específico
function atualizarPontosPericia(status) {
    const spans = document.querySelectorAll(`.pontos-pericia-disponiveis[data-status="${status}"]`);
    spans.forEach(span => {
        span.textContent = Math.max(0, atributosValores[status]) * 3;
    });
}

// Função para atualizar pontos vitais e mana
function atualizarPontosVitaiseMana() {
    const vitalidade = parseInt(document.getElementById('periciaVitalidade').value) || 0;
    const resistencia = parseInt(document.getElementById('periciaResistenciaFisica').value) || 0;
    
    // Calcular pontos de vida (base 25 + 3 por ponto de vitalidade)
    const pontosVida = 25 + (vitalidade * 3);
    document.getElementById('pontosVida').value = pontosVida;
    
    // Calcular pontos de armadura (base 1 + 1 por ponto de resistência física)
    const pontosArmadura = 1 + resistencia;
    document.getElementById('pontosArmadura').value = pontosArmadura;
}

// Função para calcular o custo de mudança entre valores
function calcularCustoMudanca(valorAtual, novoValor) {
    const dif = novoValor - valorAtual;
    
    // Se está indo para negativo
    if (novoValor < 0 && valorAtual >= 0) {
        return Math.abs(novoValor); // Ganha pontos
    }
    // Se está saindo do negativo
    else if (valorAtual < 0 && novoValor >= 0) {
        return -Math.abs(valorAtual); // Gasta pontos
    }
    // Se está mudando dentro dos negativos
    else if (valorAtual < 0 && novoValor < 0) {
        if (novoValor < valorAtual) {
            return Math.abs(novoValor - valorAtual); // Ganha pontos (indo mais negativo)
        } else {
            return -(Math.abs(valorAtual) - Math.abs(novoValor)); // Gasta pontos (voltando do negativo)
        }
    }
    // Se está mudando dentro dos positivos
    else {
        return -dif; // Gasta ou ganha pontos normal
    }
}

// Aumentar atributo
document.querySelectorAll('.btn-increase').forEach(btn => {
    btn.addEventListener('click', function() {
        const status = this.dataset.status;
        const input = document.getElementById(status);
        const valorAtual = parseInt(input.value);
        
        // Não pode ultrapassar 6
        if (valorAtual >= 6) return;
        
        const novoValor = valorAtual + 1;
        const custo = calcularCustoMudanca(valorAtual, novoValor);
        
        // Se está saindo do negativo ou indo para positivo, precisa ter pontos
        if (custo < 0 && Math.abs(custo) > pontosStatus) {
            alert('Pontos insuficientes!');
            return;
        }
        
        // Atualizar valor
        input.value = novoValor;
        atributosValores[status] = novoValor;
        
        // Ajustar pontos
        if (custo < 0) {
            pontosStatus += custo; // custo é negativo, então subtrai
        } else {
            pontosStatus += custo; // custo é positivo, então adiciona
        }
        
        // Atualizar perícias se saiu do negativo
        if (valorAtual < 0 && novoValor >= 0) {
            const pericias = document.querySelectorAll(`.pericia-input[data-status="${status}"]`);
            pericias.forEach(pericia => {
                pericia.readOnly = false;
                pericia.value = 0;
            });
        }
        
        atualizarPontosDisponiveis();
        atualizarPontosPericia(status);
        atualizarPontosVitaiseMana();
    });
});

// Diminuir atributo
document.querySelectorAll('.btn-decrease').forEach(btn => {
    btn.addEventListener('click', function() {
        const status = this.dataset.status;
        const input = document.getElementById(status);
        const valorAtual = parseInt(input.value);
        
        // Não pode ir abaixo de -3
        if (valorAtual <= -3) return;
        
        const novoValor = valorAtual - 1;
        const custo = calcularCustoMudanca(valorAtual, novoValor);
        
        // Verificar se tem pontos suficientes se estiver gastando
        if (custo < 0 && Math.abs(custo) > pontosStatus) {
            alert('Pontos insuficientes!');
            return;
        }
        
        // Atualizar valor
        input.value = novoValor;
        atributosValores[status] = novoValor;
        
        // Ajustar pontos
        if (custo < 0) {
            pontosStatus += custo; // custo é negativo, então subtrai
        } else {
            pontosStatus += custo; // custo é positivo, então adiciona
        }
        
        // Se entrou no negativo, bloquear perícias
        if (novoValor < 0) {
            const pericias = document.querySelectorAll(`.pericia-input[data-status="${status}"]`);
            pericias.forEach(pericia => {
                pericia.readOnly = true;
                pericia.value = novoValor;
            });
        }
        
        atualizarPontosDisponiveis();
        atualizarPontosPericia(status);
        atualizarPontosVitaiseMana();
    });
});

// Sistema de Perícias
document.querySelectorAll('.btn-pericia-increase').forEach(btn => {
    btn.addEventListener('click', function() {
        const periciaId = this.dataset.pericia;
        const input = document.getElementById(periciaId);
        const status = input.dataset.status;
        const valorAtual = parseInt(input.value);
        const statusValor = parseInt(document.getElementById(status).value);
        const pontosPericiaDisponiveis = Math.max(0, statusValor) * 3;
        
        // Verificar pontos de perícia disponíveis para este status
        const periciasStatus = Array.from(document.querySelectorAll(`.pericia-input[data-status="${status}"]`));
        const pontosUsados = periciasStatus.reduce((total, pericia) => {
            return total + Math.max(0, parseInt(pericia.value));
        }, 0);
        
        const pontosDisponiveisAgora = pontosPericiaDisponiveis - pontosUsados;
        
        if (statusValor < 0) {
            alert('Não é possível aumentar perícias enquanto o atributo principal está negativo!');
            return;
        }
        
        if (valorAtual < 5 && pontosDisponiveisAgora > 0) {
            input.value = valorAtual + 1;
            
            if (periciaId === 'periciaVitalidade' || periciaId === 'periciaResistenciaFisica') {
                atualizarPontosVitaiseMana();
            }
            
            // Atualizar contador de pontos de perícia
            const span = document.querySelector(`.pontos-pericia-disponiveis[data-status="${status}"]`);
            if (span) {
                span.textContent = pontosDisponiveisAgora - 1;
            }
        }
    });
});

document.querySelectorAll('.btn-pericia-decrease').forEach(btn => {
    btn.addEventListener('click', function() {
        const periciaId = this.dataset.pericia;
        const input = document.getElementById(periciaId);
        const status = input.dataset.status;
        const valorAtual = parseInt(input.value);
        const statusValor = parseInt(document.getElementById(status).value);
        
        if (valorAtual > 0 && statusValor >= 0) {
            input.value = valorAtual - 1;
            
            if (periciaId === 'periciaVitalidade' || periciaId === 'periciaResistenciaFisica') {
                atualizarPontosVitaiseMana();
            }
            
            // Atualizar contador de pontos de perícia
            const periciasStatus = Array.from(document.querySelectorAll(`.pericia-input[data-status="${status}"]`));
            const pontosUsados = periciasStatus.reduce((total, pericia) => {
                return total + Math.max(0, parseInt(pericia.value));
            }, 0);
            const pontosPericiaDisponiveis = Math.max(0, statusValor) * 3;
            
            const span = document.querySelector(`.pontos-pericia-disponiveis[data-status="${status}"]`);
            if (span) {
                span.textContent = pontosPericiaDisponiveis - pontosUsados + 1;
            }
        }
    });
});

// Inicializar
atualizarPontosDisponiveis();
['forca', 'destreza', 'constituicao', 'inteligencia', 'sabedoria', 'carisma'].forEach(status => {
    atualizarPontosPericia(status);
});

// Botão Limpar
document.getElementById('btnLimpar').addEventListener('click', function() {
    if (confirm('Tem certeza que deseja limpar todos os dados?')) {
        document.getElementById('characterForm').reset();
        document.getElementById('imagePreview').innerHTML = '';
        pontosStatus = 8;
        atributosValores = {
            forca: 0,
            destreza: 0,
            constituicao: 0,
            inteligencia: 0,
            sabedoria: 0,
            carisma: 0
        };
        
        // Resetar todos os status
        ['forca', 'destreza', 'constituicao', 'inteligencia', 'sabedoria', 'carisma'].forEach(status => {
            document.getElementById(status).value = 0;
            atualizarPontosPericia(status);
        });
        
        // Resetar todas as perícias
        document.querySelectorAll('.pericia-input').forEach(input => {
            input.value = 0;
            input.readOnly = false;
        });
        
        atualizarPontosDisponiveis();
        atualizarPontosVitaiseMana();
        
        // Esconder grupos de subraça e subclasse
        document.getElementById('subracaGroup').style.display = 'none';
        document.getElementById('subclasseGroup').style.display = 'none';
        document.getElementById('alinhamentoDescricao').style.display = 'none';
    }
});

// Botão Baixar Ficha
document.getElementById('btnBaixarFicha').addEventListener('click', function() {
    // Verificar se o formulário está preenchido
    const form = document.getElementById('characterForm');
    if (!form.checkValidity()) {
        alert('Por favor, preencha todos os campos obrigatórios antes de baixar a ficha.');
        form.reportValidity();
        return;
    }
    
    // Mostrar modal de escolha de formato
    const modalDownload = document.getElementById('modalDownload');
    modalDownload.style.display = 'block';
});

// Fechar modal de download
document.querySelector('.close-download').addEventListener('click', function() {
    document.getElementById('modalDownload').style.display = 'none';
});

// Botões de download
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const format = this.dataset.format;
        downloadFicha(format);
        document.getElementById('modalDownload').style.display = 'none';
    });
});

// Função para coletar dados do formulário
function coletarDadosFormulario() {
    const form = document.getElementById('characterForm');
    const formData = new FormData(form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }
    
    // Coletar proficiências
    const proficiencias = [];
    document.querySelectorAll('input[name="proficiencias"]:checked').forEach(cb => {
        proficiencias.push(cb.value);
    });
    data.proficiencias = proficiencias;
    
    // Coletar todas as perícias com nomes legíveis
    data.pericias = {
        // Força
        'Arremesso (FOR)': parseInt(document.getElementById('periciaArremesso').value),
        'Atletismo (FOR)': parseInt(document.getElementById('periciaAtletismo').value),
        'Brutalidade (FOR)': parseInt(document.getElementById('periciaBrutalidade').value),
        
        // Destreza
        'Acrobacia (DES)': parseInt(document.getElementById('periciaAcrobacia').value),
        'Equilíbrio (DES)': parseInt(document.getElementById('periciaEquilibrio').value),
        'Furtividade (DES)': parseInt(document.getElementById('periciaFurtividade').value),
        'Pontaria (DES)': parseInt(document.getElementById('periciaPontaria').value),
        'Prestidigitação (DES)': parseInt(document.getElementById('periciaPrestidigitacao').value),
        'Reflexos (DES)': parseInt(document.getElementById('periciaReflexos').value),
        
        // Constituição
        'Recuperação de Vida (CON)': parseInt(document.getElementById('periciaRecuperacaoVida').value),
        'Resistência Física (CON)': parseInt(document.getElementById('periciaResistenciaFisica').value),
        'Vitalidade (CON)': parseInt(document.getElementById('periciaVitalidade').value),
        
        // Inteligência
        'Arcanismo (INT)': parseInt(document.getElementById('periciaArcanismo').value),
        'Engenharia (INT)': parseInt(document.getElementById('periciaEngenharia').value),
        'História (INT)': parseInt(document.getElementById('periciaHistoria').value),
        'Investigação (INT)': parseInt(document.getElementById('periciaInvestigacao').value),
        'Natureza (INT)': parseInt(document.getElementById('periciaNatureza').value),
        
        // Sabedoria
        'Adestrar Animais (SAB)': parseInt(document.getElementById('periciaAdestrarAnimais').value),
        'Intuição (SAB)': parseInt(document.getElementById('periciaIntuicao').value),
        'Leitura de Ambiente (SAB)': parseInt(document.getElementById('periciaLeituraAmbiente').value),
        'Medicina (SAB)': parseInt(document.getElementById('periciaMedicina').value),
        'Percepção (SAB)': parseInt(document.getElementById('periciaPercepcao').value),
        'Sobrevivência (SAB)': parseInt(document.getElementById('periciaSobrevivencia').value),
        
        // Carisma
        'Atuação (CAR)': parseInt(document.getElementById('periciaAtuacao').value),
        'Enganação (CAR)': parseInt(document.getElementById('periciaEnganacao').value),
        'Intimidação (CAR)': parseInt(document.getElementById('periciaIntimidacao').value),
        'Liderança (CAR)': parseInt(document.getElementById('periciaLideranca').value),
        'Persuasão (CAR)': parseInt(document.getElementById('periciaPersuasao').value),
        'Sedução (CAR)': parseInt(document.getElementById('periciaSeducao').value)
    };
    
    // Coletar imagem
    const imagemGaleria = document.getElementById('imagemGaleria').files[0];
    if (imagemGaleria) {
        const reader = new FileReader();
        reader.onload = function(e) {
            data.imagem = e.target.result;
        };
        reader.readAsDataURL(imagemGaleria);
    } else {
        data.imagem = document.getElementById('imagemUrl').value;
    }
    
    return data;
}

// Função para baixar a ficha
async function downloadFicha(format) {
    const data = coletarDadosFormulario();
    
    if (format === 'pdf') {
        await gerarPDF(data);
    } else if (format === 'word') {
        await gerarWord(data);
    }
}

// Gerar PDF
async function gerarPDF(data) {
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        
        // Configurações iniciais
        let y = 20;
        const margin = 20;
        const pageWidth = 210;
        
        // Cabeçalho
        doc.setFontSize(20);
        doc.setFont('helvetica', 'bold');
        doc.text('FICHA DE PERSONAGEM RPG', pageWidth / 2, y, { align: 'center' });
        y += 15;
        
        doc.setDrawColor(0);
        doc.setLineWidth(0.5);
        doc.line(margin, y, pageWidth - margin, y);
        y += 10;
        
        // Informações Principais
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('INFORMAÇÕES PRINCIPAIS', margin, y);
        y += 8;
        
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        
        doc.text(`Nome do Personagem: ${data.nomePersonagem}`, margin, y);
        y += 6;
        doc.text(`Nome do Jogador: ${data.nomeJogador}`, margin, y);
        y += 6;
        doc.text(`Nível: ${data.nivel}`, margin, y);
        y += 10;
        
        // Imagem do personagem (se houver)
        if (data.imagem) {
            try {
                const img = new Image();
                img.crossOrigin = 'anonymous';
                img.src = data.imagem;
                
                await new Promise((resolve) => {
                    img.onload = () => {
                        const imgWidth = 60;
                        const imgHeight = 80;
                        const imgX = pageWidth - margin - imgWidth;
                        const imgY = y - 40;
                        
                        doc.addImage(img, 'JPEG', imgX, imgY, imgWidth, imgHeight);
                        doc.rect(imgX - 2, imgY - 2, imgWidth + 4, imgHeight + 4);
                        resolve();
                    };
                    img.onerror = () => {
                        console.warn('Erro ao carregar imagem, continuando sem ela...');
                        resolve();
                    };
                });
            } catch (e) {
                console.warn('Erro ao processar imagem:', e);
            }
        }
        
        // Dados do Personagem
        if (y > 160) {
            doc.addPage();
            y = 20;
        }
        
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('DADOS DO PERSONAGEM', margin, y);
        y += 8;
        
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        
        doc.text(`Idade: ${data.idade} anos`, margin, y);
        y += 6;
        doc.text(`Altura: ${data.altura} cm`, margin, y);
        y += 6;
        doc.text(`Peso: ${data.peso} kg`, margin, y);
        y += 6;
        doc.text(`Gênero: ${data.genero}`, margin, y);
        y += 6;
        doc.text(`Orientação Sexual: ${data.orientacaoSexual}`, margin, y);
        y += 6;
        doc.text(`Local de Nascimento: ${data.localNascimento}`, margin, y);
        y += 10;
        
        // História
        doc.setFont('helvetica', 'bold');
        doc.text('História:', margin, y);
        y += 6;
        doc.setFont('helvetica', 'normal');
        const historiaLines = doc.splitTextToSize(data.historia, pageWidth - 2 * margin);
        doc.text(historiaLines, margin, y);
        y += historiaLines.length * 6 + 6;
        
        // Nova página se necessário
        if (y > 240) {
            doc.addPage();
            y = 20;
        }
        
        // Origem
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('ORIGEM', margin, y);
        y += 8;
        
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        
        doc.text(`Raça: ${data.raca}`, margin, y);
        y += 6;
        if (data.subraca) {
            doc.text(`Subraça: ${data.subraca}`, margin, y);
            y += 6;
        }
        doc.text(`Classe: ${data.classe}`, margin, y);
        y += 6;
        if (data.subclasse) {
            doc.text(`Subclasse: ${data.subclasse}`, margin, y);
            y += 6;
        }
        doc.text(`Alinhamento: ${data.alinhamento}`, margin, y);
        y += 10;
        
        // Status
        if (y > 220) {
            doc.addPage();
            y = 20;
        }
        
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('STATUS', margin, y);
        y += 8;
        
        // Atributos principais em grade
        const status = [
            ['Força', data.forca],
            ['Destreza', data.destreza],
            ['Constituição', data.constituicao],
            ['Inteligência', data.inteligencia],
            ['Sabedoria', data.sabedoria],
            ['Carisma', data.carisma]
        ];
        
        doc.setFontSize(11);
        const col1 = margin;
        const col2 = margin + 63;
        const col3 = margin + 126;
        
        for (let i = 0; i < status.length; i++) {
            const [nome, valor] = status[i];
            const rowY = y + Math.floor(i / 3) * 8;
            const col = i % 3 === 0 ? col1 : i % 3 === 1 ? col2 : col3;
            
            doc.setFont('helvetica', 'bold');
            doc.text(`${nome}:`, col, rowY);
            doc.setFont('helvetica', 'normal');
            doc.text(`${valor}`, col + 35, rowY);
        }
        
        y += 20;
        
        // Pontos Vitais
        doc.setFont('helvetica', 'bold');
        doc.text('PONTOS VITAIS', margin, y);
        y += 8;
        
        doc.setFont('helvetica', 'normal');
        doc.text(`Pontos de Vida: ${data.pontosVida}`, margin, y);
        y += 6;
        doc.text(`Pontos de Mana: ${data.pontosMana}`, margin, y);
        y += 6;
        doc.text(`Pontos de Armadura: ${data.pontosArmadura}`, margin, y);
        y += 10;
        
        // PERÍCIAS - Nova página
        doc.addPage();
        y = 20;
        
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('PERÍCIAS', margin, y);
        y += 10;
        
        doc.setFontSize(10);
        doc.setFont('helvetica', 'normal');
        
        // Ordenar perícias alfabeticamente
        const periciasOrdenadas = Object.entries(data.pericias).sort((a, b) => 
            a[0].localeCompare(b[0], 'pt-BR')
        );
        
        // Listar todas as perícias
        periciasOrdenadas.forEach(([nome, valor]) => {
            if (y > 270) {
                doc.addPage();
                y = 20;
            }
            
            // Nome da perícia com pontos até o valor
            const pontos = '.'.repeat(Math.max(1, 80 - nome.length));
            doc.text(`${nome} ${pontos} ${valor}`, margin, y);
            y += 6;
        });
        
        y += 5;
        
        // Outros Dados
        if (y > 200) {
            doc.addPage();
            y = 20;
        }
        
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('OUTROS DADOS', margin, y);
        y += 8;
        
        doc.setFontSize(11);
        doc.setFont('helvetica', 'normal');
        
        doc.text(`Ouro: ${data.ouro}`, margin, y);
        y += 10;
        
        if (data.proficiencias && data.proficiencias.length > 0) {
            doc.setFont('helvetica', 'bold');
            doc.text('Proficiências:', margin, y);
            y += 6;
            doc.setFont('helvetica', 'normal');
            
            const profText = data.proficiencias.join(', ');
            const profLines = doc.splitTextToSize(profText, pageWidth - 2 * margin);
            doc.text(profLines, margin, y);
            y += profLines.length * 6 + 6;
        }
        
        if (data.equipamentos) {
            if (y > 250) {
                doc.addPage();
                y = 20;
            }
            
            doc.setFont('helvetica', 'bold');
            doc.text('Equipamentos:', margin, y);
            y += 6;
            doc.setFont('helvetica', 'normal');
            
            const equipLines = doc.splitTextToSize(data.equipamentos, pageWidth - 2 * margin);
            doc.text(equipLines, margin, y);
            y += equipLines.length * 6;
        }
        
        // Rodapé
        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        doc.text('Gerado por Sistema de Ficha RPG', pageWidth / 2, 290, { align: 'center' });
        
        // Salvar PDF
        const fileName = `ficha_${data.nomePersonagem.replace(/\s+/g, '_')}.pdf`;
        doc.save(fileName);
        
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        alert('Erro ao gerar PDF. Por favor, tente novamente.');
    }
}

// Gerar Word
async function gerarWord(data) {
    try {
        // Ordenar perícias alfabeticamente
        const periciasOrdenadas = Object.entries(data.pericias).sort((a, b) => 
            a[0].localeCompare(b[0], 'pt-BR')
        );
        
        // Criar lista de perícias formatada
        let periciasHTML = '';
        periciasOrdenadas.forEach(([nome, valor]) => {
            const pontos = '.'.repeat(Math.max(5, 70 - nome.length));
            periciasHTML += `<div style="font-family: 'Courier New', monospace; padding: 3px 0;">${nome} ${pontos} ${valor}</div>`;
        });
        
        // Criar conteúdo HTML para a ficha
        const htmlContent = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    body {
                        font-family: 'Calibri', sans-serif;
                        margin: 2cm;
                        line-height: 1.4;
                    }
                    h1 {
                        text-align: center;
                        color: #2c3e50;
                        border-bottom: 3px double #3498db;
                        padding-bottom: 10px;
                        margin-bottom: 30px;
                    }
                    h2 {
                        color: #2980b9;
                        border-bottom: 1px solid #3498db;
                        padding-bottom: 5px;
                        margin-top: 25px;
                        margin-bottom: 15px;
                    }
                    .section {
                        margin-bottom: 20px;
                        padding: 15px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        background: #f9f9f9;
                    }
                    .info-grid {
                        display: grid;
                        grid-template-columns: repeat(2, 1fr);
                        gap: 10px;
                        margin: 15px 0;
                    }
                    .info-item {
                        padding: 8px;
                        background: white;
                        border: 1px solid #eee;
                    }
                    .status-grid {
                        display: grid;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 15px;
                        margin: 20px 0;
                    }
                    .status-item {
                        text-align: center;
                        padding: 15px;
                        border: 2px solid #2c3e50;
                        border-radius: 8px;
                        background: #ecf0f1;
                    }
                    .image-container {
                        text-align: center;
                        margin: 20px 0;
                    }
                    .image-container img {
                        max-width: 300px;
                        max-height: 300px;
                        border: 3px solid #3498db;
                        border-radius: 10px;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 15px 0;
                    }
                    th, td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        background-color: #3498db;
                        color: white;
                    }
                    .pericias-lista {
                        background: white;
                        padding: 15px;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        font-size: 11px;
                    }
                    .footer {
                        text-align: center;
                        margin-top: 40px;
                        font-style: italic;
                        color: #7f8c8d;
                    }
                </style>
            </head>
            <body>
                <h1>FICHA DE PERSONAGEM RPG</h1>
                
                ${data.imagem ? `
                <div class="image-container">
                    <img src="${data.imagem}" alt="Personagem">
                </div>
                ` : ''}
                
                <div class="section">
                    <h2>Informações Principais</h2>
                    <div class="info-grid">
                        <div class="info-item"><strong>Nome do Personagem:</strong> ${data.nomePersonagem}</div>
                        <div class="info-item"><strong>Nome do Jogador:</strong> ${data.nomeJogador}</div>
                        <div class="info-item"><strong>Nível:</strong> ${data.nivel}</div>
                    </div>
                </div>
                
                <div class="section">
                    <h2>Dados do Personagem</h2>
                    <div class="info-grid">
                        <div class="info-item"><strong>Idade:</strong> ${data.idade} anos</div>
                        <div class="info-item"><strong>Altura:</strong> ${data.altura} cm</div>
                        <div class="info-item"><strong>Peso:</strong> ${data.peso} kg</div>
                        <div class="info-item"><strong>Gênero:</strong> ${data.genero}</div>
                        <div class="info-item"><strong>Orientação Sexual:</strong> ${data.orientacaoSexual}</div>
                        <div class="info-item"><strong>Local de Nascimento:</strong> ${data.localNascimento}</div>
                    </div>
                    
                    <p><strong>História:</strong><br>${data.historia}</p>
                    <p><strong>Motivação:</strong><br>${data.motivacao}</p>
                    <p><strong>Personalidade:</strong><br>${data.personalidade}</p>
                    <p><strong>Descrição Física:</strong><br>${data.descricaoFisica}</p>
                </div>
                
                <div class="section">
                    <h2>Origem</h2>
                    <div class="info-grid">
                        <div class="info-item"><strong>Raça:</strong> ${data.raca}</div>
                        ${data.subraca ? `<div class="info-item"><strong>Subraça:</strong> ${data.subraca}</div>` : ''}
                        <div class="info-item"><strong>Classe:</strong> ${data.classe}</div>
                        ${data.subclasse ? `<div class="info-item"><strong>Subclasse:</strong> ${data.subclasse}</div>` : ''}
                        <div class="info-item"><strong>Alinhamento:</strong> ${data.alinhamento}</div>
                    </div>
                </div>
                
                <div class="section">
                    <h2>Status</h2>
                    
                    <div class="status-grid">
                        <div class="status-item">
                            <strong>FORÇA</strong><br>
                            ${data.forca}
                        </div>
                        <div class="status-item">
                            <strong>DESTREZA</strong><br>
                            ${data.destreza}
                        </div>
                        <div class="status-item">
                            <strong>CONSTITUIÇÃO</strong><br>
                            ${data.constituicao}
                        </div>
                        <div class="status-item">
                            <strong>INTELIGÊNCIA</strong><br>
                            ${data.inteligencia}
                        </div>
                        <div class="status-item">
                            <strong>SABEDORIA</strong><br>
                            ${data.sabedoria}
                        </div>
                        <div class="status-item">
                            <strong>CARISMA</strong><br>
                            ${data.carisma}
                        </div>
                    </div>
                    
                    <h3>Pontos Vitais</h3>
                    <table>
                        <tr>
                            <th>Pontos de Vida</th>
                            <th>Pontos de Mana</th>
                            <th>Pontos de Armadura</th>
                        </tr>
                        <tr>
                            <td>${data.pontosVida}</td>
                            <td>${data.pontosMana}</td>
                            <td>${data.pontosArmadura}</td>
                        </tr>
                    </table>
                </div>
                
                <div class="section">
                    <h2>Perícias</h2>
                    <div class="pericias-lista">
                        ${periciasHTML}
                    </div>
                </div>
                
                <div class="section">
                    <h2>Outros Dados</h2>
                    
                    <p><strong>Ouro:</strong> ${data.ouro}</p>
                    
                    ${data.proficiencias && data.proficiencias.length > 0 ? `
                    <p><strong>Proficiências:</strong><br>
                    ${data.proficiencias.join(', ')}<br></p>
                    ` : ''}
                    
                    ${data.equipamentos ? `
                    <p><strong>Equipamentos:</strong><br>
                    ${data.equipamentos}</p>
                    ` : ''}
                </div>
                
                <div class="footer">
                    Gerado por Sistema de Ficha RPG • ${new Date().toLocaleDateString('pt-BR')}
                </div>
            </body>
            </html>
        `;
        
        // Criar Blob e download
        const blob = new Blob([htmlContent], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ficha_${data.nomePersonagem.replace(/\s+/g, '_')}.docx`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
    } catch (error) {
        console.error('Erro ao gerar Word:', error);
        alert('Erro ao gerar documento Word. Por favor, tente novamente.');
    }
}

// Botão Exportar JSON
document.getElementById('btnExportar').addEventListener('click', function() {
    const data = coletarDadosFormulario();
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `ficha_${data.nomePersonagem || 'personagem'}.json`;
    a.click();
    URL.revokeObjectURL(url);
});

// Botão Importar JSON
document.getElementById('btnImportar').addEventListener('click', function() {
    document.getElementById('fileImport').click();
});

document.getElementById('fileImport').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = JSON.parse(e.target.result);
                preencherFormulario(data);
                alert('Ficha importada com sucesso!');
            } catch (error) {
                alert('Erro ao importar arquivo JSON');
                console.error(error);
            }
        };
        reader.readAsText(file);
    }
});

function preencherFormulario(data) {
    // Preencher campos simples
    Object.keys(data).forEach(key => {
        const input = document.getElementById(key);
        if (input && typeof data[key] !== 'object') {
            input.value = data[key];
        }
    });
    
    // Preencher proficiências
    if (data.proficiencias) {
        document.querySelectorAll('input[name="proficiencias"]').forEach(cb => {
            cb.checked = data.proficiencias.includes(cb.value);
        });
    }
    
    // Preencher imagem
    if (data.imagem) {
        const preview = document.getElementById('imagePreview');
        preview.innerHTML = `<img src="${data.imagem}" alt="Preview" style="max-width: 200px; max-height: 200px;">`;
        if (data.imagem.startsWith('http')) {
            document.getElementById('imagemUrl').value = data.imagem;
        }
    }
    
    // Trigger change events para atualizar subraça e subclasse
    document.getElementById('raca').dispatchEvent(new Event('change'));
    document.getElementById('classe').dispatchEvent(new Event('change'));
    document.getElementById('alinhamento').dispatchEvent(new Event('change'));
    
    // Recalcular pontos
    atualizarPontosVitaiseMana();
}

// Botão Imprimir Molde
document.getElementById('btnImprimir').addEventListener('click', function() {
    // Criar conteúdo de impressão como molde
    const printContent = document.createElement('div');
    printContent.innerHTML = gerarMoldeImpressao();
    
    // Abrir janela de impressão
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Molde de Ficha de Personagem</title>
            <style>
                @page {
                    size: A4;
                    margin: 2cm;
                }
                body {
                    font-family: 'Times New Roman', serif;
                    background: white;
                    margin: 0;
                    padding: 0;
                    line-height: 1.5;
                }
                .container {
                    max-width: 100%;
                    padding: 20px;
                }
                h1 {
                    color: #000;
                    text-align: center;
                    border-bottom: 3px double #000;
                    padding-bottom: 15px;
                    margin-bottom: 30px;
                    font-size: 28px;
                }
                .section {
                    border: 2px solid #000;
                    margin-bottom: 25px;
                    padding: 20px;
                    page-break-inside: avoid;
                    background: white;
                }
                .section h2 {
                    color: #000;
                    border-bottom: 1px solid #000;
                    padding-bottom: 5px;
                    margin-bottom: 15px;
                    font-size: 18px;
                }
                .linha {
                    border-bottom: 1px solid #000;
                    min-height: 20px;
                    margin: 8px 0;
                    padding: 2px 0;
                }
                .linha-dupla {
                    border-bottom: 3px double #000;
                    min-height: 25px;
                    margin: 10px 0;
                    padding: 3px 0;
                }
                .molde-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 15px;
                    margin: 20px 0;
                }
                .molde-grid-item {
                    border: 2px solid #000;
                    padding: 15px;
                    text-align: center;
                    min-height: 80px;
                }
                .molde-grid-item h4 {
                    margin-bottom: 10px;
                    border-bottom: 1px solid #000;
                    padding-bottom: 5px;
                }
                .molde-textarea {
                    border: 1px solid #000;
                    min-height: 80px;
                    margin: 10px 0;
                    background: #f9f9f9;
                    padding: 10px;
                }
                .molde-area-desenho {
                    border: 2px solid #000;
                    width: 300px;
                    height: 300px;
                    margin: 20px auto;
                    background: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .molde-area-desenho-text {
                    color: #666;
                    font-style: italic;
                }
                .status-box {
                    display: inline-block;
                    width: 50px;
                    height: 50px;
                    border: 2px solid #000;
                    margin: 5px;
                    text-align: center;
                    line-height: 50px;
                    font-size: 20px;
                    font-weight: bold;
                    background: #f8f8f8;
                }
                .pericia-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border: 1px dashed #666;
                    padding: 8px;
                    margin: 5px 0;
                }
                .pericia-item label {
                    flex: 1;
                }
                .pericia-value {
                    width: 50px;
                    height: 30px;
                    border: 1px solid #000;
                    text-align: center;
                    line-height: 30px;
                }
                .checkbox-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 10px;
                    margin: 15px 0;
                }
                .checkbox-item {
                    display: flex;
                    align-items: center;
                    padding: 5px;
                    border: 1px solid #ddd;
                }
                .checkbox-box {
                    width: 15px;
                    height: 15px;
                    border: 1px solid #000;
                    margin-right: 8px;
                }
                .footer {
                    text-align: center;
                    margin-top: 40px;
                    font-style: italic;
                    color: #666;
                    font-size: 12px;
                }
                @media print {
                    body {
                        -webkit-print-color-adjust: exact;
                        print-color-adjust: exact;
                    }
                    .section {
                        break-inside: avoid;
                    }
                }
            </style>
        </head>
        <body>
            ${printContent.innerHTML}
            <div class="footer">
                Molde para preenchimento manual • Use caneta preta ou azul para preencher
            </div>
            <script>
                window.onload = function() {
                    window.print();
                    setTimeout(() => window.close(), 500);
                };
            <\/script>
        </body>
        </html>
    `);
    printWindow.document.close();
});

function gerarMoldeImpressao() {
    return `
        <div class="container">
            <h1>MOLDE DE FICHA DE PERSONAGEM RPG</h1>
            
            <div class="section">
                <h2>INFORMAÇÕES PRINCIPAIS</h2>
                <div class="linha-dupla">
                    <strong>Nome do Personagem:</strong>
                </div>
                <div class="linha-dupla">
                    <strong>Nome do Jogador:</strong>
                </div>
                <div class="linha-dupla">
                    <strong>Nível:</strong>
                </div>
            </div>
            
            <div class="section">
                <h2>APARÊNCIA DO PERSONAGEM</h2>
                <div class="molde-area-desenho">
                    <div class="molde-area-desenho-text">
                        Desenhe ou cole foto do personagem aqui
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h2>DADOS DO PERSONAGEM</h2>
                <div class="linha"><strong>Idade:</strong></div>
                <div class="linha"><strong>Altura:</strong></div>
                <div class="linha"><strong>Peso:</strong></div>
                <div class="linha"><strong>Gênero:</strong></div>
                <div class="linha"><strong>Orientação Sexual:</strong></div>
                <div class="linha"><strong>Local de Nascimento:</strong></div>
                
                <div class="molde-textarea"><strong>História:</strong></div>
                <div class="molde-textarea"><strong>Motivação:</strong></div>
                <div class="molde-textarea"><strong>Personalidade:</strong></div>
                <div class="molde-textarea"><strong>Descrição Física:</strong></div>
            </div>
            
            <div class="section">
                <h2>ORIGEM</h2>
                <div class="linha"><strong>Raça:</strong></div>
                <div class="linha"><strong>Subraça:</strong></div>
                <div class="linha"><strong>Classe:</strong></div>
                <div class="linha"><strong>Subclasse:</strong></div>
                <div class="linha"><strong>Alinhamento:</strong></div>
            </div>
            
            <div class="section">
                <h2>ATRIBUTOS PRINCIPAIS</h2>
                <div class="molde-grid">
                    <div class="molde-grid-item">
                        <h4>FORÇA</h4>
                        <div class="status-box">__</div>
                    </div>
                    <div class="molde-grid-item">
                        <h4>DESTREZA</h4>
                        <div class="status-box">__</div>
                    </div>
                    <div class="molde-grid-item">
                        <h4>CONSTITUIÇÃO</h4>
                        <div class="status-box">__</div>
                    </div>
                    <div class="molde-grid-item">
                        <h4>INTELIGÊNCIA</h4>
                        <div class="status-box">__</div>
                    </div>
                    <div class="molde-grid-item">
                        <h4>SABEDORIA</h4>
                        <div class="status-box">__</div>
                    </div>
                    <div class="molde-grid-item">
                        <h4>CARISMA</h4>
                        <div class="status-box">__</div>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h2>PONTOS VITAIS</h2>
                <div class="molde-grid">
                    <div class="molde-grid-item">
                        <h4>PONTOS DE VIDA</h4>
                        <div style="font-size: 24px; font-weight: bold;">___</div>
                    </div>
                    <div class="molde-grid-item">
                        <h4>PONTOS DE MANA</h4>
                        <div style="font-size: 24px; font-weight: bold;">___</div>
                    </div>
                    <div class="molde-grid-item">
                        <h4>PONTOS DE ARMADURA</h4>
                        <div style="font-size: 24px; font-weight: bold;">___</div>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h2>PERÍCIAS</h2>
                <div class="pericia-item">
                    <label>Acrobacia (DES):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Adestrar Animais (SAB):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Arcanismo (INT):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Arremesso (FOR):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Atletismo (FOR):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Atuação (CAR):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Brutalidade (FOR):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Enganação (CAR):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Engenharia (INT):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Equilíbrio (DES):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Furtividade (DES):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>História (INT):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Intimidação (CAR):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Intuição (SAB):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Investigação (INT):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Leitura de Ambiente (SAB):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Liderança (CAR):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Medicina (SAB):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Natureza (INT):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Percepção (SAB):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Persuasão (CAR):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Pontaria (DES):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Prestidigitação (DES):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Recuperação de Vida (CON):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Reflexos (DES):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Resistência Física (CON):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Sedução (CAR):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Sobrevivência (SAB):</label>
                    <div class="pericia-value">__</div>
                </div>
                <div class="pericia-item">
                    <label>Vitalidade (CON):</label>
                    <div class="pericia-value">__</div>
                </div>
            </div>
            
            <div class="section">
                <h2>PROFICIÊNCIAS</h2>
                <div class="checkbox-grid">
                    <div class="checkbox-item">
                        <div class="checkbox-box"></div>
                        <span>Armas Brancas</span>
                    </div>
                    <div class="checkbox-item">
                        <div class="checkbox-box"></div>
                        <span>Armaduras Leves</span>
                    </div>
                    <div class="checkbox-item">
                        <div class="checkbox-box"></div>
                        <span>Arco e Flecha</span>
                    </div>
                    <div class="checkbox-item">
                        <div class="checkbox-box"></div>
                        <span>Alquimia</span>
                    </div>
                    <div class="checkbox-item">
                        <div class="checkbox-box"></div>
                        <span>Armas Pesadas</span>
                    </div>
                    <div class="checkbox-item">
                        <div class="checkbox-box"></div>
                        <span>Armaduras Médias</span>
                    </div>
                    <div class="checkbox-item">
                        <div class="checkbox-box"></div>
                        <span>Bestas</span>
                    </div>
                    <div class="checkbox-item">
                        <div class="checkbox-box"></div>
                        <span>Herbologia</span>
                    </div>
                    <div class="checkbox-item">
                        <div class="checkbox-box"></div>
                        <span>Arma de Fogo</span>
                    </div>
                    <div class="checkbox-item">
                        <div class="checkbox-box"></div>
                        <span>Armadura Pesada</span>
                    </div>
                    <div class="checkbox-item">
                        <div class="checkbox-box"></div>
                        <span>Instrumentos</span>
                    </div>
                    <div class="checkbox-item">
                        <div class="checkbox-box"></div>
                        <span>Primeiros Socorros</span>
                    </div>
                </div>
                <div class="molde-textarea">
                    <strong>Outras Proficiências:</strong>
                </div>
            </div>
            
            <div class="section">
                <h2>OUTROS DADOS</h2>
                <div class="linha-dupla">
                    <strong>Ouro:</strong> ________
                </div>
                <div class="molde-textarea">
                    <strong>Equipamentos e Itens:</strong>
                </div>
                <div class="molde-textarea">
                    <strong>Habilidades Especiais:</strong>
                </div>
                <div class="molde-textarea">
                    <strong>Magias Conhecidas:</strong>
                </div>
                <div class="molde-textarea">
                    <strong>Anotações e Observações:</strong>
                </div>
            </div>
        </div>
    `;
}

// Fechar modal
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modalVisualizacao').style.display = 'none';
});

window.addEventListener('click', function(e) {
    const modal = document.getElementById('modalVisualizacao');
    const modalDownload = document.getElementById('modalDownload');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
    if (e.target === modalDownload) {
        modalDownload.style.display = 'none';
    }
});