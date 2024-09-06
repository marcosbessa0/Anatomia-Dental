// Alternar modo escuro
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Base de dados com características dos 32 dentes permanentes, incluindo morfologia e anatomia interna
const teethData = {
  // Quadrante Superior Direito
  "11": {
      morfologia: "Incisivo Central Superior Direito: Forma de cunha, coroa larga, borda incisal reta, com ângulo mesioincisal mais agudo que o distoincisal. Face lingual possui cíngulo no terço cervical e cristas marginais delimitando a fossa lingual. Raiz única e cônica.",
      anatomiaInterna: "Câmara pulpar ampla e triangular, com um único conduto radicular amplo e reto, forma de raiz cônica achatada. Na região de cíngulo observa-se uma projeção dentinária na margem cervical palatina do conduto radicular denominada de ombro palatino que deverá ser removida por meio de desgaste compensatório."
  },
  "12": {
      morfologia: "Incisivo Lateral Superior Direito: Coroa menor que o central, borda incisal ligeiramente arredondada. Cíngulo mais estreito. Raiz é proporcionalmente mais longa que a do central, mais afilada, mais achatada no sentido mesiodistal e o seu terço apical é mais desviado para distal.",
      anatomiaInterna: "Câmara pulpar menor e mais arredondada, a raiz apresenta formato cônico ligeiramente achatada no sentido mesio-distal com canal radicular único. Por esse motivo, ela tende a apresentar curvaturas acentuadas para distal e palatino. Trata-se do elemento dental que apresenta as maiores variações e anomalias como microdontia, dens invaginatus (ou dens in dente), sulco palato-gengival, fusão, dentre outros."
  },
  "13": {
      morfologia: "Canino Superior Direito: Coroa de forma pentagonal, face vestibular convexa com uma cúspide pronunciada na borda incisal, que a divide em duas inclinações. O segmento mesial da aresta longitudinal é mais curto e menos inclinado. O segmento distal é maior e mais pronunciado. Cíngulo mais robusto. Raiz longa, forte, robusta e reta geralmente.",
      anatomiaInterna: "Dente mais longo, a maior câmara pulpar com formato ovalado, conduto radicular único, longo e de diâmetro uniforme, raiz espessa. O forame apical geralmente se situa no ápice da raiz, podendo estar deslocado para a face vestibular."
  },
  "14": {
      morfologia: "Primeiro Pré-Molar Superior Direito: Forma trapezoidal, com cúspides vestibular e palatina. A cúspide vestibular é maior que a palatina, com inclinação acentuada. Raiz geralmente bifurcada, podendo ser única em alguns casos.",
      anatomiaInterna: "Câmara pulpar com dois chifres pulpares correspondentes às cúspides. Geralmente dois condutos radiculares (vestibular e palatino), que podem se fundir no terço apical. O formato da raiz é achatado no sentido mesiodistal."
  },
  "15": {
      morfologia: "Segundo Pré-Molar Superior Direito: Coroa com duas cúspides quase iguais em altura, sendo a vestibular ligeiramente maior. Raiz única, normalmente mais longa que a do primeiro pré-molar.",
      anatomiaInterna: "Câmara pulpar ovalada com dois chifres pulpares de tamanho semelhante. Normalmente possui um único conduto radicular que pode se dividir na porção apical."
  },
  "16": {
      morfologia: "Primeiro Molar Superior Direito: Coroa com quatro cúspides principais (mesiovestibular, distovestibular, mesiopalatina e distopalatina) e uma cúspide acessória (tubérculo de Carabelli). Raiz trifurcada (duas vestibulares e uma palatina), sendo a raiz palatina a maior.",
      anatomiaInterna: "Câmara pulpar ampla e com chifres pulpares que acompanham as cúspides. Três condutos radiculares (mesiovestibular, distovestibular e palatino), sendo o mesiovestibular frequentemente bifurcado."
  },
  "17": {
      morfologia: "Segundo Molar Superior Direito: Coroa quadrangular com quatro cúspides bem definidas, mas sem o tubérculo de Carabelli. Raiz trifurcada semelhante ao primeiro molar, mas com raízes mais próximas.",
      anatomiaInterna: "Câmara pulpar ampla com chifres correspondentes às cúspides. Três condutos radiculares (mesiovestibular, distovestibular e palatino), com variações frequentes nos formatos."
  },
  "18": {
      morfologia: "Terceiro Molar Superior Direito: Coroa de formato variável, frequentemente menor que os outros molares e com cúspides irregulares. Raízes frequentemente fusionadas ou muito curvas.",
      anatomiaInterna: "Câmara pulpar de formato variável, condutos radiculares irregulares em número e forma. A anatomia interna pode ser altamente imprevisível."
  },
  
  // Quadrante Superior Esquerdo
  "21": {
      morfologia: "Incisivo Central Superior Esquerdo: Similar ao direito, com forma de cunha, borda incisal reta, e cíngulo no terço cervical.",
      anatomiaInterna: "Câmara pulpar ampla e triangular, com um único conduto radicular reto e cônico."
  },
  "22": {
      morfologia: "Incisivo Lateral Superior Esquerdo: Coroa menor e mais arredondada na borda incisal. Cíngulo mais estreito e raiz ligeiramente curvada para distal.",
      anatomiaInterna: "Câmara pulpar arredondada, com conduto radicular único, podendo apresentar curvaturas para distal e palatino."
  },
  "23": {
      morfologia: "Canino Superior Esquerdo: Cúspide única pronunciada com arestas incisais bem definidas. Raiz longa e robusta.",
      anatomiaInterna: "Câmara pulpar com formato oval, conduto radicular único e longo. Raiz espessa e forame apical frequentemente deslocado."
  },
  "24": {
      morfologia: "Primeiro Pré-Molar Superior Esquerdo: Coroa com cúspide vestibular maior que a palatina. Raiz bifurcada em 60% dos casos.",
      anatomiaInterna: "Câmara pulpar com dois chifres pulpares e condutos radiculares frequentemente separados."
  },
  "25": {
      morfologia: "Segundo Pré-Molar Superior Esquerdo: Duas cúspides de altura semelhante, raiz única.",
      anatomiaInterna: "Câmara pulpar oval, geralmente com um conduto radicular, podendo se dividir próximo ao ápice."
  },
  "26": {
      morfologia: "Primeiro Molar Superior Esquerdo: Quatro cúspides principais e um tubérculo acessório. Raiz trifurcada.",
      anatomiaInterna: "Três condutos radiculares (mesiovestibular, distovestibular e palatino), com variações na bifurcação dos condutos."
  },
  "27": {
      morfologia: "Segundo Molar Superior Esquerdo: Coroa quadrangular, quatro cúspides. Raiz trifurcada.",
      anatomiaInterna: "Três condutos radiculares, sendo o mesiovestibular o mais complexo e frequentemente bifurcado."
  },
  "28": {
      morfologia: "Terceiro Molar Superior Esquerdo: Coroa e raízes de forma variável e imprevisível.",
      anatomiaInterna: "Câmara pulpar e condutos radiculares de anatomia altamente variável, com frequentes fusões e curvaturas acentuadas."
  },
  
  // Quadrante Inferior Esquerdo
  "31": {
      morfologia: "Incisivo Central Inferior Esquerdo: Menor dente da arcada, coroa estreita e borda incisal reta.",
      anatomiaInterna: "Câmara pulpar pequena e achatada, com um conduto radicular único e fino."
  },
  "32": {
      morfologia: "Incisivo Lateral Inferior Esquerdo: Semelhante ao central, mas um pouco maior com borda incisal inclinada.",
      anatomiaInterna: "Câmara pulpar estreita, com um conduto radicular que pode ser reto ou apresentar curvaturas leves."
  },
  "33": {
      morfologia: "Canino Inferior Esquerdo: Cúspide bem pronunciada e raiz longa e reta.",
      anatomiaInterna: "Câmara pulpar ovalada com um conduto radicular longo e uniforme."
  },
  "34": {
      morfologia: "Primeiro Pré-Molar Inferior Esquerdo: Cúspide vestibular maior que a lingual, raiz única.",
      anatomiaInterna: "Câmara pulpar com dois chifres, geralmente um conduto radicular."
  },
  "35": {
      morfologia: "Segundo Pré-Molar Inferior Esquerdo: Cúspides vestibular e lingual quase iguais.",
      anatomiaInterna: "Câmara pulpar com um ou dois condutos radiculares, variando com a morfologia do dente."
  },
  "36": {
      morfologia: "Primeiro Molar Inferior Esquerdo: Cinco cúspides (três bucais, duas linguais), duas raízes.",
      anatomiaInterna: "Câmara pulpar ampla com três ou quatro condutos radiculares, frequentemente com ramificações no ápice."
  },
  "37": {
      morfologia: "Segundo Molar Inferior Esquerdo: Quatro cúspides e duas raízes.",
      anatomiaInterna: "Câmara pulpar com três condutos principais, com possíveis curvaturas."
  },
  "38": {
      morfologia: "Terceiro Molar Inferior Esquerdo: Coroa e raízes de forma variável, raízes geralmente fusionadas.",
      anatomiaInterna: "Câmara pulpar e condutos radiculares altamente variáveis, geralmente com curvaturas e fusões complexas."
  },
  
  // Quadrante Inferior Direito
  "41": {
      morfologia: "Incisivo Central Inferior Direito: Menor dente da arcada, coroa estreita e borda incisal reta.",
      anatomiaInterna: "Câmara pulpar pequena e achatada, com um conduto radicular fino e reto."
  },
  "42": {
      morfologia: "Incisivo Lateral Inferior Direito: Semelhante ao central, com leve inclinação da borda incisal.",
      anatomiaInterna: "Câmara pulpar estreita, com um conduto radicular, frequentemente com curvatura distal."
  },
  "43": {
      morfologia: "Canino Inferior Direito: Cúspide pronunciada, raiz longa e reta.",
      anatomiaInterna: "Câmara pulpar ovalada, conduto radicular único, longo e uniforme."
  },
  "44": {
      morfologia: "Primeiro Pré-Molar Inferior Direito: Cúspide vestibular maior que a lingual, raiz única.",
      anatomiaInterna: "Câmara pulpar com dois chifres e um conduto radicular."
  },
  "45": {
      morfologia: "Segundo Pré-Molar Inferior Direito: Cúspides vestibular e lingual semelhantes.",
      anatomiaInterna: "Câmara pulpar com um ou dois condutos radiculares, variando com a anatomia do dente."
  },
  "46": {
      morfologia: "Primeiro Molar Inferior Direito: Cinco cúspides e duas raízes bem distintas.",
      anatomiaInterna: "Câmara pulpar ampla com três ou quatro condutos radiculares, frequentemente bifurcados."
  },
  "47": {
      morfologia: "Segundo Molar Inferior Direito: Coroa com quatro cúspides, duas raízes.",
      anatomiaInterna: "Três condutos radiculares principais, podendo apresentar curvaturas nos terços apicais."
  },
  "48": {
      morfologia: "Terceiro Molar Inferior Direito: Coroa e raízes de forma altamente variável.",
      anatomiaInterna: "Câmara pulpar e condutos radiculares de anatomia imprevisível, geralmente com múltiplas variações."
  }
};

// Função de busca das características morfológicas e anatômicas internas dos dentes
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value.trim().toLowerCase();
    const externalContainer = document.getElementById('results-container');
    const externalDetails = document.getElementById('result-details');
    const internalDetails = document.getElementById('internal-details');

    // Busca o dente pelo código ou descrição
    const toothKey = Object.keys(teethData).find(key => 
        query.includes(key) || 
        query.includes(teethData[key].morfologia.toLowerCase().split(':')[0].trim())
    );

    if (toothKey) {
        externalDetails.textContent = teethData[toothKey].morfologia;
        internalDetails.textContent = teethData[toothKey].anatomiaInterna;
        externalContainer.classList.remove('hidden');
    } else {
        externalDetails.textContent = "Dente não encontrado. Por favor, verifique o número ou descrição.";
        internalDetails.textContent = "";
        externalContainer.classList.remove('hidden');
    }
});

// Adicionando um filtro de busca por tipo de dente
const filterSelect = document.getElementById('filter-select');
filterSelect.addEventListener('change', () => {
  const selectedFilter = filterSelect.value;  

  // Limpa os resultados exibidos
  const externalContainer = document.getElementById('results-container');
  const externalDetails = document.getElementById('result-details');
  const internalDetails = document.getElementById('internal-details');
  
  externalDetails.textContent = "";
  internalDetails.textContent = "";
  externalContainer.classList.add('hidden');

  // Filtra os dados
  const filteredData = Object.entries(teethData)
    .filter(([key, value]) => {
      const toothType = value.morfologia.split(':')[0].toLowerCase();
      return selectedFilter === 'todos' || toothType.includes(selectedFilter.toLowerCase());
    });

  if (filteredData.length > 0) {
    const resultText = filteredData.map(([key, value]) => 
      `Código: ${key}\nMorfologia: ${value.morfologia}\nAnatomia Interna: ${value.anatomiaInterna}`
    ).join('\n\n');

    externalDetails.textContent = resultText;
    internalDetails.textContent = "";
    externalContainer.classList.remove('hidden');
  } else {
    externalDetails.textContent = "Nenhum dente encontrado com o filtro selecionado.";
    internalDetails.textContent = "";
    externalContainer.classList.remove('hidden');
  }
});

// Código para carregar o modelo 3D
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
document.getElementById('3d-model').appendChild(renderer.domElement);

const loader = new THREE.GLTFLoader();
loader.load('path/to/your/model.gltf', function (gltf) {
  scene.add(gltf.scene);
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
