const themeToggle = document.getElementById('theme-toggle');
const icon = themeToggle.querySelector('i');
   
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Trocar ícone
    if (document.body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
    }
  });
const btn = document.querySelector('.md\\:hidden');
const menu = document.querySelector('.mobile-menu');
const menuLinks = document.querySelector('.mobile-menu a');
btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});
menuLinks.addEventListener(
    'click', () => {
    menu.classList.toggle('active');
});
// Portfolio Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const dashboardItems = document.querySelectorAll('.dashboard-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active', 'bg-purple-600', 'text-white'));
        filterButtons.forEach(btn => btn.classList.add('bg-gray-200', 'text-gray-700'));
        
        // Add active class to clicked button
        button.classList.add('active', 'bg-purple-600', 'text-white');
        button.classList.remove('bg-gray-200', 'text-gray-700');
        
        const filterValue = button.getAttribute('data-filter');
        
        dashboardItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Modal functionality
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const viewDetailBtns = document.querySelectorAll('.view-detail');

// Sample data for modal (in a real scenario, this would come from a database)
const dashboardData = {
    '1': {
        title: 'Análise de Atendimentos',
        description: 'Dashboard completo com análise de atendimentos ambulatoriais e hospitalares por diferentes segmentos, auxiliando em estratégias para o direcionamento de investimentos futuros.',
        image: './imagens/PA3.png'
    },
    '2': {
        title: 'Gestão de Infraestrutura',
        description: 'Análise da infraestrutura de serviços, unidades, leitos, equipamentos e habilitações, permitindo identificar gargalos, mapear cobertura e avaliar a capacidade instalada.',
        image: './imagens/cnes3.png'
    },
    '3': {
        title: 'Controle de Receita',
        description: 'Análise detalhada de receitas, despesas, margens e indicadores financeiros.',
        image: './imagens/Faturamento geral3.png'
    },
    '4': {
        title: 'Indicadores Operacionais',
        description: 'Indicadores de produtividade, eficiência e qualidade dos serviços prestados, permitindo comparar metas, avaliar desempenho por unidade ou setor e identificar desvios operacionais.',
        image: './imagens/Faturamento posterior3.png'
    },
    '5': {
        title: 'Análise regional',
        description: 'Painéis interativos que detalham indicadores por região, permitindo comparações dinâmicas entre estados e macrorregiões.',
        image: './imagens/GraficoMapas.png'
    },
    '6': {
        title: 'Taxa de Evolução (%MoM / %YoY)',
        description: 'Análise da evolução "month over month" e "year over year", permitindo identificar quedas de produção e padrões periódicos.',
        image: './imagens/TaxaEvolucao3.png'
    }
};

viewDetailBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const dashboardId = btn.getAttribute('data-id');
        const data = dashboardData[dashboardId];
        
        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-description').textContent = data.description;
        document.getElementById('modal-image').src = data.image;
        document.getElementById('modal-image').alt = data.title;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});