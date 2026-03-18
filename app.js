// ============================================
// APP MUSIQUES LIBRES — Zone Total Sport
// Thème: Synthwave / Néon Musical
// Application 100% statique
// ============================================

// ---- DONNÉES : Sources Musicales ----
const MUSIC_SOURCES = [
  {
    nom: "Free Music Archive (FMA)",
    url: "freemusicarchive.org",
    description: "La plus grande bibliothèque de musiques libres de droits au monde, fondée en 2009 par WFMU. Des milliers de titres soigneusement sélectionnés par des curateurs, couvrant tous les genres musicaux.",
    licence: "Creative Commons",
    licenceDetail: "CC BY, CC BY-SA, CC0 selon les artistes",
    genres: ["Rock", "Pop", "Jazz", "Électronique", "Classique", "Folk", "Hip-hop", "Ambient", "Expérimental"],
    avantages: "Recherche avancée par BPM, genre, humeur et durée. Téléchargement gratuit en MP3 320kbps. Vaste catalogue avec métadonnées complètes. Idéal pour trouver exactement le style recherché.",
    idealPour: "Cours de danse, expression corporelle, fond musical varié",
    bpmFilter: true,
    nbTracks: "150 000+"
  },
  {
    nom: "ccMixter",
    url: "ccmixter.org",
    description: "Communauté collaborative de remixeurs et créateurs de musique libre. Plateforme unique où les artistes partagent leurs pistes séparées (a cappella, instrumental) pour permettre la création de remixes.",
    licence: "Creative Commons",
    licenceDetail: "CC BY, CC BY-NC selon les artistes",
    genres: ["Électronique", "Ambient", "Hip-hop", "World Music", "Jazz fusion", "Downtempo"],
    avantages: "Recherche par tag et humeur. Versions instrumentales systématiquement disponibles. Métadonnées BPM incluses. Communauté active et contenu régulièrement renouvelé.",
    idealPour: "Échauffements dynamiques, circuits, activités rythmiques",
    bpmFilter: true,
    nbTracks: "50 000+"
  },
  {
    nom: "YouTube Audio Library",
    url: "studio.youtube.com → channel/music",
    description: "Bibliothèque officielle de YouTube proposant des musiques et effets sonores entièrement gratuits. Spécialement conçue pour les créateurs de contenu, elle est mise à jour régulièrement par Google.",
    licence: "Libre d'utilisation",
    licenceDetail: "Gratuit usage commercial et non-commercial. Attribution non requise pour certains titres.",
    genres: ["Tous les genres", "Cinématique", "Pop", "Rock", "Électronique", "Jazz", "Classique", "Ambient", "Country"],
    avantages: "Filtres par humeur (heureux, calme, dramatique, etc.), genre, instrument, durée et BPM. Aucun compte Google Play requis. Interface intuitive. Téléchargement direct MP3.",
    idealPour: "Tout type d'activité ÉPS, polyvalence maximale",
    bpmFilter: true,
    nbTracks: "1 500+"
  },
  {
    nom: "Incompetech (Kevin MacLeod)",
    url: "incompetech.com",
    description: "Kevin MacLeod est un compositeur prolifique qui offre plus de 2 000 compositions originales sous licence CC BY. Ses œuvres sont parmi les plus utilisées dans l'éducation et la production vidéo au monde.",
    licence: "CC BY",
    licenceDetail: "CC BY 4.0 — Mention du compositeur obligatoire",
    genres: ["Cinématique", "Ambient", "Action", "Jazz", "Classique", "Bluegrass", "Électronique", "Marche"],
    avantages: "Classé par genre, feel (épique, mystérieux, joyeux, etc.) et tempo. Très utilisé en milieu éducatif. Compositions originales de haute qualité. Catalogue très diversifié.",
    idealPour: "Fond musical calme, introduction d'activités, transitions entre exercices",
    bpmFilter: false,
    nbTracks: "2 000+"
  },
  {
    nom: "Pixabay Music",
    url: "pixabay.com/music",
    description: "Pixabay, la plateforme de ressources visuelles libres, propose également une bibliothèque musicale de haute qualité. Artistes indépendants du monde entier y partagent leurs créations.",
    licence: "Pixabay Licence",
    licenceDetail: "Commercial OK. Attribution non requise. Licence permissive.",
    genres: ["Électronique", "Pop", "Cinématique", "Lo-fi", "Hip-hop", "Ambient", "Rock", "World", "Funk"],
    avantages: "Filtres par humeur, BPM, durée et popularité. Interface intuitive et moderne. MP3 gratuit en haute qualité. Contenu mis à jour quotidiennement par des artistes actifs.",
    idealPour: "Remplacement facile et rapide de musique, toutes activités",
    bpmFilter: true,
    nbTracks: "100 000+"
  },
  {
    nom: "Bensound",
    url: "bensound.com",
    description: "Benjamin Tissot (Bensound) est un compositeur français professionnel qui offre ses compositions sous licence libre. Connu pour sa qualité de production cinématographique et ses arrangements soignés.",
    licence: "Gratuit avec attribution",
    licenceDetail: "Gratuit avec attribution sur support. Licence commerciale disponible sans attribution.",
    genres: ["Électronique", "Acoustique", "Cinématique", "Pop", "Corporate", "Jazz", "Ambient", "Rock léger"],
    avantages: "Haute qualité de production professionnelle. Catégories bien organisées. Grande variété de styles pour tous les contextes. Titres longue durée adaptés aux cours (3-5 minutes).",
    idealPour: "Fond musical professionnel, présentations, ambiance de cours",
    bpmFilter: false,
    nbTracks: "400+"
  },
  {
    nom: "Musopen",
    url: "musopen.org",
    description: "Organisation à but non lucratif spécialisée dans la musique classique libre de droits. Musopen finance des enregistrements orchestraux de haute qualité pour les libérer dans le domaine public.",
    licence: "Domaine public / CC0",
    licenceDetail: "Domaine public ou CC0 — Utilisation libre totale, aucune attribution requise",
    genres: ["Classique", "Baroque", "Romantique", "Impressionnisme", "Mozart", "Beethoven", "Bach", "Chopin", "Debussy"],
    avantages: "Qualité d'enregistrement orchestral professionnelle. Parfait pour activités de calme et relaxation. Totalement libres de droits. Grande valeur culturelle pour les élèves.",
    idealPour: "Relaxation, yoga, retour au calme, étirements, concentration",
    bpmFilter: false,
    nbTracks: "10 000+"
  },
  {
    nom: "Jamendo",
    url: "jamendo.com",
    description: "Plateforme communautaire internationale d'artistes indépendants. Fondée au Luxembourg en 2005, Jamendo propose l'un des plus grands catalogues de musiques sous Creative Commons au monde.",
    licence: "Creative Commons",
    licenceDetail: "Varie par artiste — CC BY, CC BY-SA, CC BY-NC selon les œuvres",
    genres: ["Tous genres", "Rock indépendant", "Électronique", "World", "Jazz", "Folk", "Metal", "Pop", "R&B", "Reggae"],
    avantages: "600 000+ titres d'artistes du monde entier. Filtre avancé par BPM, genre et humeur. Artistes diversifiés culturellement. Application mobile disponible pour écoute en classe.",
    idealPour: "Découverte culturelle, diversité musicale, ambiances variées",
    bpmFilter: true,
    nbTracks: "600 000+"
  }
];

// ---- DONNÉES : Guide BPM ----
const BPM_GUIDE = [
  {
    activite: "🚶 Échauffement / Retour au calme",
    bpmMin: 60,
    bpmMax: 80,
    description: "Musique douce et progressive pour préparer les corps en douceur ou favoriser la récupération en fin de cours. Le tempo lent permet une augmentation graduelle de la fréquence cardiaque.",
    feel: "Calme et progressif — monte doucement en énergie",
    genres: ["Ambient", "Acoustique", "Nature sounds", "Classique doux", "Lo-fi"],
    couleur: "cyan"
  },
  {
    activite: "🏃 Course légère / Endurance",
    bpmMin: 120,
    bpmMax: 145,
    description: "Tempo régulier et motivant qui synchronise naturellement avec la foulée de course. Des études montrent qu'un BPM correspondant à la cadence de course améliore les performances de 15%.",
    feel: "Rythmé et constant — maintient la motivation",
    genres: ["Pop électronique", "Dance", "Hip-hop", "Indie pop", "Funk"],
    couleur: "vert"
  },
  {
    activite: "🎯 Activités de précision / Concentration",
    bpmMin: 80,
    bpmMax: 100,
    description: "Musique instrumentale à tempo modéré favorisant la concentration sans distraction. Éviter les paroles qui perturbent la focalisation mentale lors de tâches requérant de la précision.",
    feel: "Focalisé et stable — favorise la concentration",
    genres: ["Jazz instrumental", "Classique baroque", "Lo-fi hip-hop", "Ambient minimal"],
    couleur: "bleu"
  },
  {
    activite: "💃 Danse et expression corporelle",
    bpmMin: 90,
    bpmMax: 130,
    description: "Le BPM idéal varie selon le style de danse enseigné. La salsa et la cumbia se situent vers 90-120 BPM, le hip-hop vers 85-110 BPM, et les danses contemporaines autour de 100-130 BPM.",
    feel: "Groove et fluidité — invite au mouvement",
    genres: ["Salsa", "Hip-hop", "Contemporain", "Funk", "Pop dansante", "R&B"],
    couleur: "magenta"
  },
  {
    activite: "⚡ Circuits intensifs / HIIT",
    bpmMin: 140,
    bpmMax: 180,
    description: "Musique très énergique pour les efforts intenses. Un BPM élevé augmente la motivation, réduit la perception de la fatigue et pousse les élèves à maintenir l'intensité pendant les intervalles.",
    feel: "Explosif et énergique — pousse à se dépasser",
    genres: ["EDM", "Dubstep", "Electro-house", "Metal léger", "Drum & Bass", "Trap"],
    couleur: "rouge"
  },
  {
    activite: "🤸 Étirements / Yoga / Pleine conscience",
    bpmMin: 55,
    bpmMax: 75,
    description: "Musique très apaisante favorisant la relaxation musculaire profonde. Les sons naturels (forêt, eau) ou la musique instrumentale douce aident les élèves à maintenir les positions d'étirement.",
    feel: "Relaxant et contemplatif — détend corps et esprit",
    genres: ["Ambient nature", "Classique doux", "New Age", "Sons de la nature", "Piano seul"],
    couleur: "violet"
  },
  {
    activite: "🎮 Jeux collectifs / Sports d'équipe",
    bpmMin: 120,
    bpmMax: 160,
    description: "Musique dynamique et positive qui crée une ambiance de jeu fun et inclusive. Favorise les interactions sociales et maintient l'énergie du groupe pendant toute la durée du jeu.",
    feel: "Dynamique et positif — crée l'esprit d'équipe",
    genres: ["Pop", "Dance-pop", "Électronique festif", "Hip-hop positif", "Indie rock"],
    couleur: "orange"
  },
  {
    activite: "🏋️ Musculation / Gainage / Renforcement",
    bpmMin: 120,
    bpmMax: 140,
    description: "Musique énergique mais stable, sans variations trop brusques, pour maintenir le focus lors d'efforts prolongés. Les basses profondes renforcent psychologiquement la sensation de puissance.",
    feel: "Puissant et constant — inspire la force mentale",
    genres: ["Rock alternatif", "Hip-hop beats", "Électro-rock", "Metal mélodique", "Trap instrumental"],
    couleur: "ambre"
  }
];

// ---- DONNÉES : Recommandations par Activité ----
const ACTIVITE_RECO = [
  {
    activite: "🎯 Ballon chasseur",
    bpmReco: "140–160",
    vitesse: "vfast",
    genres: ["EDM épique", "Electro-house", "Hip-hop pump-up", "Rock énergique"],
    sources: ["YouTube Audio Library", "Pixabay Music", "ccMixter"],
    conseils: "Choisir des musiques avec des pics d'énergie pour accompagner les moments intenses. Éviter les chansons trop connues qui distraient les élèves. Les playlists de 3-5 titres enchaînés fonctionnent bien."
  },
  {
    activite: "🤝 Activités coopératives",
    bpmReco: "100–120",
    vitesse: "medium",
    genres: ["Pop positive", "Indie folk", "Funk léger", "Jazz cool"],
    sources: ["Free Music Archive", "Jamendo", "Bensound"],
    conseils: "Privilégier une musique positive et inclusive qui reflète les valeurs de coopération. Volume modéré pour permettre la communication entre élèves. Choisir des pièces sans paroles agressives."
  },
  {
    activite: "💃 Danse / Expression corporelle",
    bpmReco: "90–130",
    vitesse: "medium",
    genres: ["Salsa", "Hip-hop", "Contemporain", "Pop dansante", "R&B", "Funk"],
    sources: ["YouTube Audio Library", "Free Music Archive", "Jamendo"],
    conseils: "Adapter le BPM au style de danse précis. Pour l'exploration libre, varier les styles et les BPM crée de riches expériences d'expression. Tester les morceaux au préalable pour vérifier l'adéquation au niveau du groupe."
  },
  {
    activite: "🏋️ Conditionnement / Circuits",
    bpmReco: "140–175",
    vitesse: "vfast",
    genres: ["EDM", "Hip-hop pump-up", "Électro-rock", "Dubstep", "Drum & Bass"],
    sources: ["Pixabay Music", "ccMixter", "YouTube Audio Library"],
    conseils: "Créer une playlist avec des montées en puissance progressives. Utiliser des morceaux de 30-60 secondes qui correspondent aux intervalles de travail. Prévoir une transition douce pour les phases de récupération."
  },
  {
    activite: "🧘 Yoga / Étirements / Relaxation",
    bpmReco: "55–75",
    vitesse: "slow",
    genres: ["Ambient", "Classique doux", "Sons de la nature", "New Age", "Piano seul"],
    sources: ["Musopen", "Incompetech (Kevin MacLeod)", "Free Music Archive"],
    conseils: "Musopen est idéal pour cette catégorie (orchestral classique domaine public). Les sons de la nature (rivière, forêt) sont souvent plus efficaces que la musique pour faciliter la relaxation profonde."
  },
  {
    activite: "🏃 Course / Endurance / Plein air",
    bpmReco: "125–145",
    vitesse: "fast",
    genres: ["Pop électronique", "Dance", "Hip-hop", "Indie rock", "Post-rock"],
    sources: ["YouTube Audio Library", "Free Music Archive", "Pixabay Music"],
    conseils: "Synchroniser le BPM avec la cadence de course cible des élèves (environ 160-180 pas/minute pour une course modérée). Des études montrent que cela améliore l'efficacité de course et réduit la fatigue perçue."
  },
  {
    activite: "⚖️ Équilibre / Planche / Proprioception",
    bpmReco: "70–90",
    vitesse: "slow",
    genres: ["Jazz instrumental", "Lo-fi", "Classique baroque", "Ambient minimal"],
    sources: ["Incompetech (Kevin MacLeod)", "Musopen", "ccMixter"],
    conseils: "Éviter impérativement les musiques avec des chutes de rythme brusques ou des effets de surprise qui peuvent déstabiliser les élèves en équilibre. Préférer les compositions à tempo constant."
  },
  {
    activite: "🎮 Jeux d'opposition / Duels",
    bpmReco: "130–160",
    vitesse: "fast",
    genres: ["Électronique dynamique", "Rock épique", "Hip-hop compétitif", "Orchestral action"],
    sources: ["Pixabay Music", "YouTube Audio Library", "Free Music Archive"],
    conseils: "Choisir des musiques qui évoquent la compétition amicale sans agressivité. Les orchestrations épiques de type cinématographique fonctionnent très bien pour les jeux d'opposition 1vs1 et créent un effet dramatique positif."
  }
];

// ---- DONNÉES : Playlists par Saison ----
const SEASONS_PLAYLIST = [
  {
    saison: "🍂 Automne",
    classe: "automne",
    theme: "Retour à l'école — Énergie et découverte",
    ambiance: "L'automne en ÉPS, c'est le temps des nouvelles rencontres, de l'établissement des routines et de la redécouverte du plaisir de bouger. Une musique à la fois énergique et chaleureuse aide à créer ce sentiment de nouveau départ positif.",
    genres: ["Folk électrique", "Indie pop", "Alternative", "Pop acoustique", "Hip-hop positif"],
    bpm: "110–140 BPM",
    humeurs: ["Motivant", "Chaleureux", "Dynamique", "Positif"],
    sources: ["Free Music Archive", "Jamendo", "YouTube Audio Library"]
  },
  {
    saison: "❄️ Hiver",
    classe: "hiver",
    theme: "Énergie intérieure — Chaleur et intensité",
    ambiance: "L'hiver demande de réchauffer les corps rapidement et de maintenir l'énergie haute dans les gymnases. Les activités intérieures dominent : circuits, danse, jeux de groupe. Une musique dynamique et enveloppante crée l'ambiance.",
    genres: ["Électronique chaud", "Dance-pop", "Indie électronique", "Hip-hop", "Nu-disco"],
    bpm: "120–155 BPM",
    humeurs: ["Énergique", "Chaleureux", "Festif", "Intense"],
    sources: ["Pixabay Music", "ccMixter", "YouTube Audio Library"]
  },
  {
    saison: "🌸 Printemps",
    classe: "printemps",
    theme: "Légèreté — Plein air et renouveau",
    ambiance: "Le printemps marque le retour au plein air, la légèreté et la joie. Une musique lumineuse et positive accompagne parfaitement les activités extérieures, les jeux en nature et les unités de plein air.",
    genres: ["Pop solaire", "Indie folk", "Bossa nova", "Reggae léger", "Jazz-pop"],
    bpm: "90–125 BPM",
    humeurs: ["Joyeux", "Léger", "Naturel", "Optimiste"],
    sources: ["Free Music Archive", "Jamendo", "Bensound"]
  },
  {
    saison: "☀️ Été",
    classe: "ete",
    theme: "Maximiser l'énergie — Plein air et célébration",
    ambiance: "La fin d'année scolaire est synonyme de dépassement, de célébration et d'énergie maximale. Les activités sportives culminent, les jeux olympiques de l'école s'organisent. La musique doit être à la hauteur de ces moments mémorables.",
    genres: ["Pop estivale", "EDM festival", "Latin", "Funk", "Tropical house", "Hip-hop célébration"],
    bpm: "125–165 BPM",
    humeurs: ["Festif", "Triomphal", "Solaire", "Explosif"],
    sources: ["YouTube Audio Library", "Pixabay Music", "Free Music Archive"]
  }
];

// ============================================
// INITIALISATION DE L'APPLICATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  renderBPMGuide();
  renderSources();
  renderActiviteRecos();
  renderSeasonPlaylists();
  renderLegalGuide();
  initScrollAnimations();
  updateStats();
  setTimeout(hideLoading, 600);
});

// ---- Canvas Waveform Animée ----
function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();

  const NUM_BARS = 70;
  let bars = Array.from({ length: NUM_BARS }, (_, i) => ({
    x: (canvas.width / NUM_BARS) * i,
    height: Math.random() * 120 + 30,
    speed: Math.random() * 0.04 + 0.015,
    phase: Math.random() * Math.PI * 2,
    colorPhase: Math.random() * Math.PI * 2
  }));

  let t = 0;

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const barWidth = canvas.width / NUM_BARS;

    bars.forEach((bar, i) => {
      const heightFactor = 0.4 + 0.6 * Math.abs(Math.sin(t * bar.speed + bar.phase));
      const h = bar.height * heightFactor;
      const alpha = 0.03 + 0.025 * Math.abs(Math.sin(t * 0.02 + bar.colorPhase));

      // Couleur alternant entre magenta et violet
      const colorMix = (Math.sin(bar.colorPhase + t * 0.01) + 1) / 2;
      const r = Math.round(224 * colorMix + 124 * (1 - colorMix));
      const g = Math.round(64 * colorMix + 77 * (1 - colorMix));
      const b = Math.round(251 * colorMix + 255 * (1 - colorMix));

      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      ctx.fillRect(bar.x + 1, canvas.height - h, barWidth - 2, h);
    });

    t += 1;
    requestAnimationFrame(draw);
  }

  draw();

  window.addEventListener('resize', () => {
    resize();
    bars = bars.map((bar, i) => ({
      ...bar,
      x: (canvas.width / NUM_BARS) * i
    }));
  });
}

// ---- Mise à jour des statistiques header ----
function updateStats() {
  const el = document.getElementById('stat-sources');
  const elGenres = document.getElementById('stat-genres');
  const elBpm = document.getElementById('stat-bpm');
  if (el) el.textContent = MUSIC_SOURCES.length;
  if (elGenres) elGenres.textContent = '30+';
  if (elBpm) elBpm.textContent = '55–180';
}

// ---- Render Guide BPM ----
function renderBPMGuide() {
  const container = document.getElementById('bpm-guide');
  if (!container) return;

  container.innerHTML = BPM_GUIDE.map(item => `
    <div class="bpm-card">
      <div class="bpm-activite">${item.activite}</div>
      <div class="bpm-range">${item.bpmMin}–${item.bpmMax} BPM</div>
      <p class="bpm-desc">${item.description}</p>
      <div class="bpm-feel">🎵 ${item.feel}</div>
      <div class="genre-tags">
        ${item.genres.map(g => `<span class="genre-tag">${g}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// ---- Render Sources Musicales ----
function renderSources() {
  const container = document.getElementById('sources-grid');
  if (!container) return;

  container.innerHTML = MUSIC_SOURCES.map(s => `
    <div class="source-card">
      <div class="source-header">
        <div class="source-name">${s.nom}</div>
        <span class="licence-badge">${s.licence}</span>
      </div>
      <p class="source-desc">${s.description}</p>
      <div class="source-url">🌐 ${s.url}</div>
      <div style="font-size:0.78rem;color:var(--text-muted);margin-top:6px;">
        📄 ${s.licenceDetail}
      </div>
      <div class="genre-tags">
        ${s.genres.map(g => `<span class="genre-tag">${g}</span>`).join('')}
      </div>
      <div class="source-avantages">💡 ${s.avantages}</div>
      <div class="ideal-badge">✅ Idéal pour : ${s.idealPour}</div>
      <div style="margin-top:10px;font-size:0.78rem;color:var(--secondary);">
        🎵 Catalogue : ${s.nbTracks} titres${s.bpmFilter ? ' · Filtre BPM disponible' : ''}
      </div>
    </div>
  `).join('');
}

// ---- Render Activités Recommandations ----
function renderActiviteRecos() {
  const container = document.getElementById('activite-recos');
  if (!container) return;

  container.innerHTML = ACTIVITE_RECO.map(r => `
    <div class="reco-card">
      <div class="reco-header">
        <span class="reco-activite">${r.activite}</span>
        <span class="reco-bpm ${r.vitesse}">${r.bpmReco} BPM</span>
      </div>
      <div class="genre-tags">
        ${r.genres.map(g => `<span class="genre-tag">${g}</span>`).join('')}
      </div>
      <p class="reco-conseils">${r.conseils}</p>
      <div class="reco-sources">📂 Sources : ${r.sources.join(' · ')}</div>
    </div>
  `).join('');
}

// ---- Render Playlists Saisons ----
function renderSeasonPlaylists() {
  const container = document.getElementById('seasons-grid');
  if (!container) return;

  container.innerHTML = SEASONS_PLAYLIST.map(s => `
    <div class="season-card ${s.classe}">
      <div class="season-title">${s.saison}</div>
      <div class="season-theme">${s.theme}</div>
      <p class="season-ambiance">${s.ambiance}</p>
      <div class="genre-tags">
        ${s.genres.map(g => `<span class="genre-tag">${g}</span>`).join('')}
      </div>
      <div class="season-bpm">🎚️ BPM recommandé : ${s.bpm}</div>
      <div style="font-size:0.78rem;color:var(--text-muted);margin-top:8px;">
        📂 ${s.sources.join(' · ')}
      </div>
    </div>
  `).join('');
}

// ---- Render Guide Légal ----
function renderLegalGuide() {
  const container = document.getElementById('legal-guide');
  if (!container) return;

  container.innerHTML = `
    <div class="info-banner">
      <span class="info-icon">ℹ️</span>
      <div>Ce guide est fourni à titre informatif pour les enseignants québécois. Il ne constitue pas un avis juridique. Pour toute situation particulière, consultez votre commission scolaire.</div>
    </div>

    <div class="legal-card">
      <h3>🔓 Qu'est-ce que Creative Commons?</h3>
      <p>Creative Commons (CC) est un système de licences créé en 2001 permettant aux créateurs de partager légalement leurs œuvres avec le public. Contrairement au droit d'auteur traditionnel (« tous droits réservés »), CC offre certains droits au public tout en permettant aux créateurs de conserver d'autres droits selon leurs choix.</p>
      <p>Concrètement, lorsqu'un artiste publie une musique sous licence CC, il indique clairement ce que vous pouvez faire avec : l'écouter, la télécharger, la partager, l'utiliser dans vos cours, etc. C'est une révolution pour l'éducation.</p>
    </div>

    <div class="legal-card">
      <h3>📋 Les 5 types de licences Creative Commons</h3>
      <div class="cc-licences-grid">
        <div class="cc-card cc-green">
          <div class="cc-code">CC0</div>
          <div class="cc-name">Domaine public</div>
          <p class="cc-desc">Aucune restriction whatsoever. Utilisation libre totale, même commerciale, sans aucune attribution requise.</p>
        </div>
        <div class="cc-card cc-cyan">
          <div class="cc-code">CC BY</div>
          <div class="cc-name">Attribution</div>
          <p class="cc-desc">Libre d'utilisation à condition de mentionner le créateur. La licence la plus permissive avec attribution.</p>
        </div>
        <div class="cc-card cc-blue">
          <div class="cc-code">CC BY-SA</div>
          <div class="cc-name">Attribution + Partage</div>
          <p class="cc-desc">Libre d'utilisation avec attribution + redistribution sous la même licence. Esprit « copyleft ».</p>
        </div>
        <div class="cc-card cc-yellow">
          <div class="cc-code">CC BY-NC</div>
          <div class="cc-name">Non commercial</div>
          <p class="cc-desc">Gratuit pour usage éducatif et non commercial uniquement. Parfait pour les classes.</p>
        </div>
        <div class="cc-card cc-orange">
          <div class="cc-code">CC BY-ND</div>
          <div class="cc-name">Sans dérivé</div>
          <p class="cc-desc">Utilisation autorisée mais aucune modification ou remixage permis. Distribution originale seulement.</p>
        </div>
      </div>
    </div>

    <div class="legal-card">
      <h3>🍁 Droits des enseignants au Québec</h3>
      <p>En vertu de la <strong>Loi sur le droit d'auteur canadienne (L.R.C. 1985, ch. C-42)</strong>, les enseignants bénéficient de l'<strong>exception pédagogique (art. 29.4)</strong> qui leur permet d'utiliser certaines œuvres protégées à des fins d'instruction en classe.</p>
      <p>Cependant, cette exception a des limites importantes : l'œuvre ne doit pas être disponible sur le marché pour l'enseignement, l'utilisation doit être raisonnable, et elle s'applique principalement en contexte de cours en présentiel dans un établissement scolaire.</p>
      <p><strong>Recommandation pratique :</strong> Les musiques libres de droits (Creative Commons ou domaine public) sont toujours le choix le plus sûr et le plus recommandé. Elles vous protègent entièrement et vous évitent tout questionnement légal — et il en existe d'excellentes, gratuitement!</p>
    </div>

    <div class="legal-card">
      <h3>🔍 Comment vérifier la licence d'une musique</h3>
      <p><strong>1.</strong> Sur les plateformes listées dans cette app (FMA, Pixabay, etc.), la licence est toujours affichée sur la page de la piste musicale. Cherchez les icônes CC ou le texte « licence ».</p>
      <p><strong>2.</strong> Sur YouTube, vérifiez la description de la vidéo. Les créateurs sérieux indiquent toujours la licence. Attention : « libre de droits » ne veut pas nécessairement dire gratuit commercialement.</p>
      <p><strong>3.</strong> En cas de doute, <strong>ne pas utiliser</strong> la musique et chercher une alternative sur l'une des 8 sources recommandées dans cette bibliothèque.</p>
    </div>

    <div class="legal-card">
      <h3>📝 Comment citer une source CC BY (exemple concret)</h3>
      <p>Si vous devez mentionner la source dans un document ou une vidéo de cours :</p>
      <div class="citation-example">
        <p class="citation">"Sneaky Snitch" par Kevin MacLeod (incompetech.com), sous licence Creative Commons Attribution 4.0 International. Disponible à : http://creativecommons.org/licenses/by/4.0/</p>
      </div>
      <p style="margin-top:14px;">Pour les musiques CC0 ou Pixabay Licence, aucune attribution n'est requise — vous pouvez les utiliser sans mention.</p>
    </div>

    <div class="legal-card">
      <h3>▶️ YouTube en classe : légal vs. illégal</h3>
      <div class="youtube-grid">
        <div class="youtube-ok">
          <h4>✅ Ce qui est légal</h4>
          <ul>
            <li>Écouter YouTube Audio Library en classe (licence explicite gratuite)</li>
            <li>Utiliser des vidéos YouTube en classe via l'exception pédagogique</li>
            <li>Télécharger les musiques de YouTube Audio Library (bouton officiel)</li>
            <li>Diffuser des musiques CC0 ou CC BY depuis YouTube</li>
            <li>Utiliser YouTube Music si vous avez un abonnement Premium actif</li>
          </ul>
        </div>
        <div class="youtube-no">
          <h4>❌ Ce qui est problématique</h4>
          <ul>
            <li>Télécharger des vidéos YouTube via des sites tiers (youtube-dl, etc.)</li>
            <li>Utiliser des musiques protégées sans vérifier la licence</li>
            <li>Diffuser publiquement en dehors de la classe (spectacle, YouTube scolaire)</li>
            <li>Utiliser Spotify, Apple Music ou Deezer pour une diffusion en classe</li>
            <li>Assumer qu'une musique populaire est libre parce qu'elle est « sur YouTube »</li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

// ---- Animations au scroll ----
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('animate-in');
          observer.unobserve(e.target);
        }
      });
    },
    { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
  );

  // Observe tous les éléments de carte après un court délai pour laisser le temps au render
  setTimeout(() => {
    const selectors = [
      '.bpm-card', '.source-card', '.reco-card',
      '.season-card', '.legal-card', '.cc-card',
      '.info-banner'
    ];
    document.querySelectorAll(selectors.join(', ')).forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = `opacity 0.5s ease ${i * 0.04}s, transform 0.5s ease ${i * 0.04}s`;
      observer.observe(el);
    });
  }, 100);
}

// ---- Masquer l'écran de chargement ----
function hideLoading() {
  const loading = document.getElementById('loading');
  const app = document.getElementById('app');
  if (loading) {
    loading.style.opacity = '0';
    setTimeout(() => {
      loading.style.display = 'none';
    }, 500);
  }
  if (app) {
    app.classList.remove('hidden');
  }
}

// ============================================
// LECTEUR YOUTUBE — Future House & Genres
// ============================================

// Playlists par genre (IDs de la chaîne NCS = uploads)
// NCS channel uploads: UU_aEa8K-EOJ3D6gOs7HcyNg
const YT_GENRES = {
  'future-house': {
    label: 'Future House — NCS',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=UU_aEa8K-EOJ3D6gOs7HcyNg&autoplay=0&rel=0&modestbranding=1',
    note: '▶ Future House Mix — NoCopyrightSounds (NCS)'
  },
  'deep-house': {
    label: 'Deep House — NCS',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=UU_aEa8K-EOJ3D6gOs7HcyNg&autoplay=0&rel=0&modestbranding=1',
    note: '▶ Deep House Mix — NoCopyrightSounds (NCS)'
  },
  'edm-circuit': {
    label: 'EDM Circuits — NCS',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=UU_aEa8K-EOJ3D6gOs7HcyNg&autoplay=0&rel=0&modestbranding=1',
    note: '▶ EDM Workout Mix — NoCopyrightSounds (NCS)'
  },
  'hiphop': {
    label: 'Hip-hop libre — NCS',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=UU_aEa8K-EOJ3D6gOs7HcyNg&autoplay=0&rel=0&modestbranding=1',
    note: '▶ Hip-hop / Trap — NoCopyrightSounds (NCS)'
  },
  'warmup': {
    label: 'Échauffement',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=UU_aEa8K-EOJ3D6gOs7HcyNg&autoplay=0&rel=0&modestbranding=1',
    note: '▶ Warmup Mix — NoCopyrightSounds (NCS)'
  },
  'danse': {
    label: 'Danse / Expression',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=UU_aEa8K-EOJ3D6gOs7HcyNg&autoplay=0&rel=0&modestbranding=1',
    note: '▶ Dance Mix — NoCopyrightSounds (NCS)'
  },
  'chill': {
    label: 'Chill / Détente',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=UU_aEa8K-EOJ3D6gOs7HcyNg&autoplay=0&rel=0&modestbranding=1',
    note: '▶ Chill / Lo-fi Mix — NoCopyrightSounds (NCS)'
  },
  'classique': {
    label: 'Classique — Musopen',
    embedSrc: 'https://www.youtube.com/embed/videoseries?list=UU_aEa8K-EOJ3D6gOs7HcyNg&autoplay=0&rel=0&modestbranding=1',
    note: '▶ Musique Classique Libre de Droits'
  }
};

function loadGenre(genreKey) {
  const genre = YT_GENRES[genreKey];
  if (!genre) return;

  // Update active button
  document.querySelectorAll('.yt-genre-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.genre === genreKey);
  });

  // Update iframe
  const iframe = document.getElementById('yt-iframe');
  const label = document.getElementById('yt-now-playing');
  if (iframe) iframe.src = genre.embedSrc;
  if (label) label.textContent = genre.note;

  // Scroll to player
  document.getElementById('youtube-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function loadCustomURL() {
  const input = document.getElementById('yt-url-input');
  if (!input || !input.value.trim()) return;

  const videoId = extractYouTubeId(input.value.trim());
  if (!videoId) {
    input.style.borderColor = '#ff8a80';
    input.placeholder = '⚠️ URL invalide — essaie youtube.com/watch?v=...';
    setTimeout(() => {
      input.style.borderColor = '';
      input.placeholder = 'https://youtube.com/watch?v=...';
    }, 2500);
    return;
  }

  const iframe = document.getElementById('yt-iframe');
  const label = document.getElementById('yt-now-playing');

  if (videoId.startsWith('PL') || videoId.startsWith('UU') || videoId.startsWith('RD')) {
    // Playlist
    if (iframe) iframe.src = `https://www.youtube.com/embed/videoseries?list=${videoId}&autoplay=1&rel=0&modestbranding=1`;
    if (label) label.textContent = '▶ Playlist personnalisée';
  } else {
    // Vidéo individuelle
    if (iframe) iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;
    if (label) label.textContent = '▶ Lecture en cours...';
  }

  input.value = '';
  // Deactivate genre buttons
  document.querySelectorAll('.yt-genre-btn').forEach(btn => btn.classList.remove('active'));
}

function extractYouTubeId(url) {
  // youtube.com/watch?v=ID
  let m = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (m) return m[1];
  // youtu.be/ID
  m = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (m) return m[1];
  // youtube.com/embed/ID
  m = url.match(/embed\/([a-zA-Z0-9_-]{11})/);
  if (m) return m[1];
  // Playlist list=PLxxx
  m = url.match(/[?&]list=([a-zA-Z0-9_-]+)/);
  if (m) return m[1];
  // Raw ID (11 chars)
  if (/^[a-zA-Z0-9_-]{11}$/.test(url)) return url;
  return null;
}

// ---- PLAYLIST LOCALE (sessionStorage + localStorage) ----

let myPlaylist = [];

function loadPlaylistFromStorage() {
  try {
    const saved = localStorage.getItem('zt_playlist');
    if (saved) myPlaylist = JSON.parse(saved);
  } catch (e) {
    myPlaylist = [];
  }
  renderPlaylist();
}

function savePlaylistToStorage() {
  try {
    localStorage.setItem('zt_playlist', JSON.stringify(myPlaylist));
  } catch (e) {}
}

function addToPlaylist() {
  const urlInput = document.getElementById('yt-playlist-input');
  const titleInput = document.getElementById('yt-playlist-title');
  if (!urlInput || !urlInput.value.trim()) return;

  const videoId = extractYouTubeId(urlInput.value.trim());
  if (!videoId) {
    urlInput.style.borderColor = '#ff8a80';
    setTimeout(() => urlInput.style.borderColor = '', 2000);
    return;
  }

  const track = {
    id: videoId,
    title: titleInput?.value.trim() || `Piste ${myPlaylist.length + 1}`,
    url: urlInput.value.trim(),
    addedAt: Date.now()
  };

  myPlaylist.push(track);
  savePlaylistToStorage();
  renderPlaylist();

  if (urlInput) urlInput.value = '';
  if (titleInput) titleInput.value = '';
}

function removeFromPlaylist(idx) {
  myPlaylist.splice(idx, 1);
  savePlaylistToStorage();
  renderPlaylist();
}

function playFromPlaylist(idx) {
  const track = myPlaylist[idx];
  if (!track) return;

  const iframe = document.getElementById('yt-iframe');
  const label = document.getElementById('yt-now-playing');
  const isPlaylist = track.id.startsWith('PL') || track.id.startsWith('UU') || track.id.startsWith('RD');

  if (iframe) {
    iframe.src = isPlaylist
      ? `https://www.youtube.com/embed/videoseries?list=${track.id}&autoplay=1&rel=0&modestbranding=1`
      : `https://www.youtube.com/embed/${track.id}?autoplay=1&rel=0&modestbranding=1`;
  }
  if (label) label.textContent = `▶ ${track.title}`;

  // Scroll to player
  document.querySelector('.yt-iframe-container')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function clearPlaylist() {
  if (myPlaylist.length === 0) return;
  if (confirm(`Vider la playlist (${myPlaylist.length} titres) ?`)) {
    myPlaylist = [];
    savePlaylistToStorage();
    renderPlaylist();
  }
}

function renderPlaylist() {
  const container = document.getElementById('yt-playlist');
  const countEl = document.getElementById('playlist-count');
  if (!container) return;

  if (countEl) countEl.textContent = `(${myPlaylist.length} titre${myPlaylist.length !== 1 ? 's' : ''})`;

  if (myPlaylist.length === 0) {
    container.innerHTML = '<div style="text-align:center;color:var(--text-muted);font-size:0.82rem;padding:20px;">Ta playlist est vide. Ajoute des URLs YouTube ci-dessus.</div>';
    return;
  }

  container.innerHTML = myPlaylist.map((track, idx) => `
    <div class="playlist-track">
      <button class="track-play-btn" onclick="playFromPlaylist(${idx})" title="Jouer ${escapeAttr(track.title)}">▶</button>
      <div class="track-info">
        <div class="track-title">${escapeHtml(track.title)}</div>
        <div class="track-url">${escapeHtml(track.url)}</div>
      </div>
      <button class="track-remove-btn" onclick="removeFromPlaylist(${idx})" title="Retirer">✕</button>
    </div>
  `).join('');
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function escapeAttr(str) {
  return String(str || '').replace(/"/g, '&quot;');
}

// Support touche Entrée sur les inputs
document.addEventListener('DOMContentLoaded', () => {
  const urlInput = document.getElementById('yt-url-input');
  if (urlInput) urlInput.addEventListener('keydown', e => { if (e.key === 'Enter') loadCustomURL(); });

  const playlistInput = document.getElementById('yt-playlist-input');
  if (playlistInput) playlistInput.addEventListener('keydown', e => { if (e.key === 'Enter') addToPlaylist(); });

  loadPlaylistFromStorage();
  loadBanqueDePistes();
});

// ============================================
// BANQUE DE PISTES — 1000+ pistes libres
// ============================================

const BANQUE_FILES = [
  'data/local_tracks.json',
  'data/catalogue_echauffement_course_calme.json',
  'data/catalogue_hiit_sports_jeux.json',
  'data/catalogue_danse_hiphop_monde.json',
  'data/catalogue_classique_nature_rock.json',
  'data/catalogue_electro_gainage_fete.json'
];

let allTracks = [];
let filteredTracks = [];
let banquePage = 0;
const TRACKS_PER_PAGE = 30;
let activeCategory = null;

async function loadBanqueDePistes() {
  const results = await Promise.allSettled(
    BANQUE_FILES.map(path =>
      fetch(path)
        .then(r => { if (!r.ok) throw new Error(path); return r.json(); })
        .catch(err => { console.warn('Fichier manquant:', path); throw err; })
    )
  );

  results.forEach(result => {
    if (result.status === 'fulfilled') {
      const data = result.value;
      if (Array.isArray(data)) allTracks.push(...data);
    }
  });

  console.log(`Banque: ${allTracks.length} pistes chargées`);
  filteredTracks = [...allTracks];

  // Update total
  const totalEl = document.getElementById('banque-total');
  if (totalEl) totalEl.textContent = allTracks.length;

  // Populate filter dropdowns
  populateBanqueFilters();
  renderCategoryPills();
  renderBanque();
  setupBanqueSearch();
}

function populateBanqueFilters() {
  const categories = [...new Set(allTracks.map(t => t.categorie).filter(Boolean))].sort();
  const genres = [...new Set(allTracks.map(t => t.genre).filter(Boolean))].sort();
  const sources = [...new Set(allTracks.map(t => t.source).filter(Boolean))].sort();

  const catSelect = document.getElementById('banque-categorie');
  const genreSelect = document.getElementById('banque-genre');
  const sourceSelect = document.getElementById('banque-source');

  if (catSelect) {
    categories.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c;
      opt.textContent = c;
      catSelect.appendChild(opt);
    });
  }
  if (genreSelect) {
    genres.forEach(g => {
      const opt = document.createElement('option');
      opt.value = g;
      opt.textContent = g;
      genreSelect.appendChild(opt);
    });
  }
  if (sourceSelect) {
    sources.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      sourceSelect.appendChild(opt);
    });
  }
}

function renderCategoryPills() {
  const container = document.getElementById('banque-cat-pills');
  if (!container) return;

  const catCounts = {};
  allTracks.forEach(t => {
    const cat = t.categorie || 'Autre';
    catCounts[cat] = (catCounts[cat] || 0) + 1;
  });

  const cats = Object.entries(catCounts).sort((a, b) => b[1] - a[1]);

  container.innerHTML = `
    <button class="cat-pill ${!activeCategory ? 'active' : ''}" onclick="setCategoryFilter(null)">
      Toutes (${allTracks.length})
    </button>
    ${cats.map(([cat, count]) => `
      <button class="cat-pill ${activeCategory === cat ? 'active' : ''}" onclick="setCategoryFilter('${escapeAttr(cat)}')">
        ${escapeHtml(cat)} (${count})
      </button>
    `).join('')}
  `;
}

function setCategoryFilter(cat) {
  activeCategory = cat;
  const catSelect = document.getElementById('banque-categorie');
  if (catSelect) catSelect.value = cat || '';
  filterBanque();
  renderCategoryPills();
}

function setupBanqueSearch() {
  const searchEl = document.getElementById('banque-search');
  if (searchEl) {
    let timer;
    searchEl.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(filterBanque, 250);
    });
  }
}

function filterBanque() {
  const search = (document.getElementById('banque-search')?.value || '').toLowerCase().trim();
  const categorie = activeCategory || document.getElementById('banque-categorie')?.value || '';
  const genre = document.getElementById('banque-genre')?.value || '';
  const source = document.getElementById('banque-source')?.value || '';

  filteredTracks = allTracks.filter(t => {
    if (categorie && t.categorie !== categorie) return false;
    if (genre && t.genre !== genre) return false;
    if (source && t.source !== source) return false;
    if (search) {
      const text = [
        t.titre, t.artiste, t.genre, t.categorie, t.source,
        t.usage_eps, t.description, ...(t.tags || [])
      ].filter(Boolean).join(' ').toLowerCase();
      if (!text.includes(search)) return false;
    }
    return true;
  });

  banquePage = 0;
  renderBanque();
}

function renderBanque() {
  const grid = document.getElementById('banque-grid');
  const countEl = document.getElementById('banque-count');
  if (!grid) return;

  if (countEl) {
    countEl.innerHTML = `<strong>${filteredTracks.length}</strong> piste${filteredTracks.length > 1 ? 's' : ''}`;
  }

  if (filteredTracks.length === 0) {
    grid.innerHTML = `
      <div style="text-align:center;padding:40px;color:var(--text-muted);grid-column:1/-1;">
        <div style="font-size:3rem;margin-bottom:12px;">🔇</div>
        <p>Aucune piste trouvée pour ces filtres.</p>
      </div>`;
    document.getElementById('banque-pagination').innerHTML = '';
    return;
  }

  const start = banquePage * TRACKS_PER_PAGE;
  const end = Math.min(start + TRACKS_PER_PAGE, filteredTracks.length);
  const page = filteredTracks.slice(start, end);

  grid.innerHTML = page.map(t => {
    const bpm = t.bpm_estime || '';
    const isLocal = t.local;
    return `
      <div class="track-card">
        <div class="track-card-header">
          <div class="track-titre">${escapeHtml(t.titre)}</div>
          <div class="track-artiste">${escapeHtml(t.artiste || '')}</div>
        </div>
        <div class="track-meta">
          ${bpm ? `<span class="track-bpm">${escapeHtml(String(bpm))} BPM</span>` : ''}
          <span class="track-genre">${escapeHtml(t.genre || '')}</span>
        </div>
        <div class="track-cat">${escapeHtml(t.categorie || '')}</div>
        <div class="track-footer">
          <span class="track-source">${isLocal ? '📁' : '🌐'} ${escapeHtml(t.source || '')}</span>
          <span class="track-licence">${escapeHtml(t.licence || '')}</span>
        </div>
        ${t.description ? `<div class="track-desc">${escapeHtml(t.description)}</div>` : ''}
        ${t.usage_eps ? `<div class="track-usage">🎯 ${escapeHtml(t.usage_eps)}</div>` : ''}
      </div>
    `;
  }).join('');

  renderBanquePagination();
}

function renderBanquePagination() {
  const container = document.getElementById('banque-pagination');
  if (!container) return;

  const totalPages = Math.ceil(filteredTracks.length / TRACKS_PER_PAGE);
  if (totalPages <= 1) {
    container.innerHTML = '';
    return;
  }

  let html = '';
  if (banquePage > 0) {
    html += `<button class="page-btn" onclick="goToBanquePage(${banquePage - 1})">← Précédent</button>`;
  }

  const start = Math.max(0, banquePage - 3);
  const end = Math.min(totalPages, banquePage + 4);

  for (let i = start; i < end; i++) {
    html += `<button class="page-btn ${i === banquePage ? 'active' : ''}" onclick="goToBanquePage(${i})">${i + 1}</button>`;
  }

  if (banquePage < totalPages - 1) {
    html += `<button class="page-btn" onclick="goToBanquePage(${banquePage + 1})">Suivant →</button>`;
  }

  container.innerHTML = html;
}

function goToBanquePage(page) {
  banquePage = page;
  renderBanque();
  document.getElementById('banque-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
