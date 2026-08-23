/* ─────────────────────────────────────────────────────────────────
   KitCTEN — Données des fiches pédagogiques MPC
   ────────────────────────────────────────────────────────────
   Ce fichier contient l'ensemble des 52 fiches du kit de démarrage.
   Il est chargé par KitCTEN.html via <script src="KitCTEN-fiches.js">.

   Structure de chaque fiche :
     <id>: { n: 'F1',           // Code court (F1, F2, ..., INT pour intro)
             t: 'Titre',        // Titre principal de la fiche
             s: 'Sous-titre',   // Sous-titre éditorial
             b: `<HTML>` }      // Contenu HTML de la fiche

   Pour modifier une fiche : éditer simplement la propriété correspondante.
   Pour ajouter une fiche : créer une entrée et déclarer son rattachement
   à un onglet dans KitCTEN.html (objet FICHE_TAB).

   Kit CTEN · Mathématiques – physique-chimie · 2026
   ──────────────────────────────────────────────────────────────── */

/* Helper : génère un lien externe stylisé pour les fiches.
   Utilisé dans les template literals via ${lnk(url, titre, domaine)} */
function lnk(url,txt,sub){
  return '<a class="lka" href="'+url+'" target="_blank" rel="noopener">'+
    '<span class="li"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14">'+
      '<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/>'+
      '<path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/>'+
    '</svg></span>'+
    '<span class="lt">'+txt+'<span class="ls">'+sub+'</span></span>'+
    '<span aria-hidden="true">→</span>'+
  '</a>';
}

/* ── Données des fiches ── */
window.FICHES = {
'intro':{n:'INTRO',t:'Présentation du kit CTEN : finalité et organisation',s:'Guide de démarrage MPC en lycée professionnel',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><polyline points="12 8 12 12 14 14"/></svg>
    Ce kit a été conçu pour vous
  </h3>
  <div class="hl">
    Bienvenue dans le <strong>kit de démarrage CTEN</strong>, destiné aux nouveaux enseignants de <strong>mathématiques – physique-chimie en lycée professionnel</strong>. Sans prétendre à l'exhaustivité, il rassemble les repères essentiels pour bien débuter : cadre institutionnel, pratiques pédagogiques, outils disciplinaires. Il s'inscrit en complément de votre formation et d'une veille professionnelle régulière.
  </div>
</div>

<div class="al gn">
  <div class="ai">✦</div>
  <div>
    Ce kit n'est pas un guide figé. Votre posture professionnelle se construira dans la durée — avec l'expérience, l'échange avec vos collègues et les formations que vous suivrez. Il s'inscrit dans une logique d'<strong>accompagnement progressif</strong>, au service de la réussite des élèves et de votre développement en tant qu'enseignant de mathématiques – physique-chimie en lycée professionnel.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    Finalités du kit
  </h3>
  <style>
    .intro-fin{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}
    .if-card{display:flex;gap:11px;align-items:flex-start;padding:13px 14px;border-radius:10px;border:1px solid var(--slight);background:var(--spale);page-break-inside:avoid;break-inside:avoid}
    .if-ic{flex-shrink:0;width:34px;height:34px;border-radius:9px;display:flex;align-items:center;justify-content:center}
    .if-ic svg{width:18px;height:18px;fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
    .if-tx strong{display:block;font-size:13.5px;margin-bottom:3px;line-height:1.25}
    .if-tx span{display:block;font-size:12.5px;color:var(--tmid);line-height:1.5}
    .if-pink{background:#fdeef5;border-color:#f2c0d4}.if-pink .if-ic{background:#f7d4e4;color:#b54070}.if-pink strong{color:#a8295c}
    .if-green{background:#eef7f1;border-color:#b0d9c0}.if-green .if-ic{background:#d4ead9;color:#2e6b44}.if-green strong{color:#1d6b48}
    .if-gold{background:#fdf3ec;border-color:#e4c8b0}.if-gold .if-ic{background:#f4e4d8;color:#9a5a2a}.if-gold strong{color:#7a4020}
  </style>
  <div class="intro-fin">
    <div class="if-card if-pink">
      <span class="if-ic"><svg viewBox="0 0 24 24"><path d="M4.5 16.5c-1.5 1.5-1.5 4.5-1.5 4.5s3 0 4.5-1.5c.85-.85.85-2.65 0-3.5s-2.65-.85-3.5 0Z"/><path d="m9 12-2 2 3 3 2-2M15 5l4 4-9 9-4-4 9-9Z"/><path d="M14.5 6.5 17.5 9.5"/></svg></span>
      <div class="if-tx"><strong>Faciliter la prise de fonction</strong><span>Poser les bases d'un enseignement rigoureux, cohérent et adapté aux réalités du lycée professionnel dès les premières semaines.</span></div>
    </div>
    <div class="if-card if-green">
      <span class="if-ic"><svg viewBox="0 0 24 24"><path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/></svg></span>
      <div class="if-tx"><strong>Comprendre le lycée professionnel</strong><span>Repères clairs sur le fonctionnement de l'établissement, les rôles des acteurs, les diplômes préparés (CAP, Bac Pro) et les dispositifs en place.</span></div>
    </div>
    <div class="if-card if-gold">
      <span class="if-ic"><svg viewBox="0 0 24 24"><path d="M9 3h6M10 3v7l-5 8a2 2 0 0 0 1.7 3h10.6a2 2 0 0 0 1.7-3l-5-8V3"/><path d="M7 14h10"/></svg></span>
      <div class="if-tx"><strong>Enseigner les MPC en voie pro</strong><span>Outils concrets pour enseigner les mathématiques et la physique-chimie dans un cadre exigeant, ancré dans les référentiels professionnels.</span></div>
    </div>
    <div class="if-card if-pink">
      <span class="if-ic"><svg viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
      <div class="if-tx"><strong>Gérer la classe au quotidien</strong><span>Clés pour construire un cadre de travail stable, sécurisant et propice aux apprentissages, en lien avec la diversité des profils d'élèves.</span></div>
    </div>
    <div class="if-card if-green">
      <span class="if-ic"><svg viewBox="0 0 24 24"><path d="M23 6l-9.5 9.5-5-5L1 18"/><path d="M17 6h6v6"/></svg></span>
      <div class="if-tx"><strong>Développer une posture réflexive</strong><span>Encourager le questionnement sur ses pratiques et le développement continu des compétences professionnelles.</span></div>
    </div>
    <div class="if-card if-gold">
      <span class="if-ic"><svg viewBox="0 0 24 24"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg></span>
      <div class="if-tx"><strong>Orienter vers les ressources</strong><span>Pointer vers les sites de référence, documents officiels et outils institutionnels à connaître en priorité.</span></div>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    Organisation en 4 parties — 52 fiches
  </h3>
  <style>
    .pkarte { border-radius:12px; padding:14px 16px; cursor:default; transition: transform .26s cubic-bezier(.34,1.56,.64,1), box-shadow .22s ease; }
    .pkarte:hover { transform:translateY(-5px); box-shadow:0 12px 28px rgba(0,0,0,.18); }
    .pkarte ul { margin:8px 0 0 14px; font-size:11.5px; line-height:1.75; color:#fff; }
  </style>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px">
    <div class="pkarte" style="background:#4a80c0;color:#fff">
      <div style="font-weight:800;font-size:13px;margin-bottom:2px">Partie 1 — Cadre institutionnel</div>
      <div style="font-size:11px;color:#fff;margin-bottom:4px">F1 → F8 · 8 fiches</div>
      <ul style="color:#fff">
        <li style="color:#fff">F1 · Missions du professeur contractuel</li>
        <li style="color:#fff">F2 · Acteurs du lycée professionnel</li>
        <li style="color:#fff">F3 · Diplômes préparés (CAP, Bac Pro…)</li>
        <li style="color:#fff">F4 · Les PFMP</li>
        <li style="color:#fff">F5 · Réforme de la voie professionnelle</li>
        <li style="color:#fff">F6 · Le suivi par l'inspection</li>
        <li style="color:#fff">F7 · Préparer un concours</li>
        <li style="color:#fff">F8 · La CDIsation</li>
      </ul>
    </div>
    <div class="pkarte" style="background:#3aaa5a;color:#fff">
      <div style="font-weight:800;font-size:13px;margin-bottom:2px">Partie 2 — Enseigner en MPC</div>
      <div style="font-size:11px;color:#fff;margin-bottom:4px">F9 → F21 · 13 fiches</div>
      <ul style="color:#fff">
        <li style="color:#fff">F9 · Cadre didactique des enseignements MPC</li>
        <li style="color:#fff">F10 · La bivalence en MPC</li>
        <li style="color:#fff">F11 · Savoirs fondamentaux en mathématiques</li>
        <li style="color:#fff">F12 · Maîtrise de la langue française</li>
        <li style="color:#fff">F13 · Diversité des activités d'apprentissage</li>
        <li style="color:#fff">F14 · Sécurité et protocoles en laboratoire</li>
        <li style="color:#fff">F15 · La 3ᵉ Prépa-métiers : cadre et organisation</li>
        <li style="color:#fff">F16 · Le DNB série professionnelle</li>
        <li style="color:#fff">F17 · Automatismes en Bac Pro et CAP</li>
        <li style="color:#fff">F18 · Variabilité de la mesure et incertitudes en Bac Pro</li>
        <li style="color:#fff">F19 · Électricité en Bac Pro et CAP</li>
        <li style="color:#fff">F20 · Vocabulaire ensembliste et logique en Bac Pro</li>
        <li style="color:#fff">F21 · Algorithmique et programmation en Bac Pro et CAP</li>
      </ul>
    </div>
    <div class="pkarte" style="background:var(--sdeep);color:#fff">
      <div style="font-weight:800;font-size:13px;margin-bottom:2px">Partie 3 — Pédagogie et classe</div>
      <div style="font-size:11px;color:#fff;margin-bottom:4px">F22 → F40 · 19 fiches</div>
      <ul style="color:#fff">
        <li style="color:#fff">F22–F26 · Co-intervention, accompagnement, PFMP, parcours personnalisé</li>
        <li style="color:#fff">F27–F30 · Projet, séquences pédagogiques MPC, maths, PC</li>
        <li style="color:#fff">F31–F33 · 1re heure, cahier de textes, hétérogénéité</li>
        <li style="color:#fff">F34–F40 · Évaluation, rédaction des examens, CCF</li>
      </ul>
    </div>
    <div class="pkarte" style="background:#c07010;color:#fff">
      <div style="font-weight:800;font-size:13px;margin-bottom:2px">Partie 4 — Outils et ressources</div>
      <div style="font-size:11px;color:#fff;margin-bottom:4px">F41 → F52 · 12 fiches</div>
      <ul style="color:#fff">
        <li style="color:#fff">F41 · Ressources pédagogiques MPC</li>
        <li style="color:#fff">F42–F44 · Démarches scientifique, expérimentale, mathématique</li>
        <li style="color:#fff">F45–F47 · Inclusion : aménagements (PAP, PAI, PPS, PPRE), CUA, besoins des élèves</li>
        <li style="color:#fff">F48–F51 · Grilles de compétences &amp; grilles nationales d'évaluation</li>
        <li style="color:#fff">F52 · Glossaire — sigles et termes du kit</li>
      </ul>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    Comment utiliser ce kit ?
  </h3>
  <div class="g2">
    <div class="bx gn"><strong><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:6px"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>Lecture libre</strong>Vous pouvez parcourir les fiches dans l'ordre de votre choix selon vos besoins du moment. Chaque fiche est autonome.</div>
    <div class="bx"><strong><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:6px"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>Recherche ciblée</strong>Utilisez la barre de recherche pour trouver rapidement une notion, un dispositif ou un outil spécifique.</div>
    <div class="bx gd"><strong><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:6px"><circle cx="6" cy="19" r="3"/><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/><circle cx="18" cy="5" r="3"/></svg>Lecture guidée</strong><span class="lg-intro">Selon votre situation, choisissez votre feuille de route : le kit affiche alors un parcours de fiches à suivre, dans l'ordre, dans « Ma feuille de route » (panneau de gauche).</span><div class="lg-guide"><button type="button" class="lg-sit" data-profile="debut"><span class="lg-ic"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h11l-1.5 4L15 12H4"/></svg></span><span class="lg-txt"><span class="lg-lbl">Je prends mes fonctions</span><span class="lg-tag">L'essentiel pour bien démarrer</span></span><span class="lg-go">&#8250;</span></button><button type="button" class="lg-sit" data-profile="poste"><span class="lg-ic"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h11l-1.5 4L15 12H4"/></svg></span><span class="lg-txt"><span class="lg-lbl">Je me concentre sur l'évaluation au service des apprentissages</span><span class="lg-tag">Consolider ma pratique au quotidien</span></span><span class="lg-go">&#8250;</span></button><button type="button" class="lg-sit" data-profile="besoins"><span class="lg-ic"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h11l-1.5 4L15 12H4"/></svg></span><span class="lg-txt"><span class="lg-lbl">Je souhaite mettre l'accent sur les besoins des élèves</span><span class="lg-tag">Adapter, différencier, inclure</span></span><span class="lg-go">&#8250;</span></button><button type="button" class="lg-sit" data-profile="carriere"><span class="lg-ic"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h11l-1.5 4L15 12H4"/></svg></span><span class="lg-txt"><span class="lg-lbl">Je fais évoluer ma carrière</span><span class="lg-tag">Concours, inspection, mobilité</span></span><span class="lg-go">&#8250;</span></button></div><div class="lg-foot">Vous pourrez changer de situation à tout moment.</div></div>
    <div class="bx"><strong><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:6px"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/></svg>Complément, pas substitut</strong>Ce kit est un point de départ. Consultez votre IEN, vos collègues MPC et les sites académiques pour aller plus loin.</div>
  </div>
</div>
`},

'f1':{n:'F1',t:'Les missions du professeur contractuel',s:'Rôle, responsabilités et cadre légal',b:`
<div class="s">
<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px">
<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
</svg>
Votre mission
</h3>
<p>En tant qu'enseignant contractuel, vous exercez les mêmes missions que tout professeur de l'Éducation nationale. Vous participez à la formation des élèves et contribuez à la construction d'une société éclairée, solidaire et démocratique.</p>
<div class="al"><span class="ai"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="2" y1="22" x2="22" y2="22"/><line x1="2" y1="10" x2="22" y2="10"/><polyline points="12 2 22 10 2 10"/><line x1="6" y1="10" x2="6" y2="22"/><line x1="10" y1="10" x2="10" y2="22"/><line x1="14" y1="10" x2="14" y2="22"/><line x1="18" y1="10" x2="18" y2="22"/></svg></span><span>Vos missions s'inscrivent dans le cadre du <a href="https://www.education.gouv.fr/bo/13/Hebdo30/MENE1315928A.htm" target="_blank"><strong>référentiel des compétences professionnelles des métiers du professorat et de l'éducation</strong></a> (arrêté du 1er juillet 2013 – BOEN n°30 du 25 juillet 2013).</span></div>
</div>

<div class="s">
<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</svg>
Les 4 principes fondamentaux
</h3>
<svg width="100%" viewBox="-90 55 860 460" style="overflow:visible" role="img">
<title>Les 4 principes fondamentaux du professorat</title>
<style>
.pz{transition:transform .28s cubic-bezier(.34,1.56,.64,1),filter .22s;transform-box:fill-box;transform-origin:center;cursor:pointer}
#p1:hover{transform:translate(-8px,-8px)}
#p2:hover{transform:translate(8px,-8px)}
#p3:hover{transform:translate(-8px,8px)}
#p4:hover{transform:translate(8px,8px)}
.pz:hover{filter:brightness(1.12) drop-shadow(0 8px 18px rgba(0,0,0,.28))}
.lb{font-family:inherit;font-size:1em;font-weight:400;fill:currentColor}
.ic{stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.cn{fill:none;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
</style>
<g transform="translate(340,255) scale(1.5) translate(-340,-255)">
<g id="p1" class="pz">
<path d="M220,135 H340 V177 Q358,177 358,195 Q358,213 340,213 V255 H298 Q298,273 280,273 Q262,273 262,255 H220 Z" fill="#c94060"/>
<g transform="translate(268,183)" class="ic">
<path d="M12 3L4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6L12 3Z"/>
<polyline points="9,12 11,14 15,10"/>
</g>
</g>
<g id="p2" class="pz">
<path d="M340,135 H460 V255 H418 Q418,273 400,273 Q382,273 382,255 H340 V213 Q358,213 358,195 Q358,177 340,177 Z" fill="#7a5bb5"/>
<g transform="translate(388,183)" class="ic">
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 0 3-3h7z"/>
</g>
</g>
<g id="p3" class="pz">
<path d="M220,255 H262 Q262,273 280,273 Q298,273 298,255 H340 V297 Q358,297 358,315 Q358,333 340,333 V375 H220 Z" fill="#c98a30"/>
<g transform="translate(268,303)" class="ic">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
</g>
</g>
<g id="p4" class="pz">
<path d="M340,255 H382 Q382,273 400,273 Q418,273 418,255 H460 V375 H340 V333 Q358,333 358,315 Q358,297 340,297 Z" fill="#1d9d80"/>
<g transform="translate(388,303)" class="ic">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
<circle cx="9" cy="7" r="4"/>
<path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
<path d="M16 3.13a4 4 0 0 1 0 7.75"/>
</g>
</g>
</g>
<polyline class="cn" stroke="#c94060" points="160,150 100,150 100,92"/>
<circle cx="100" cy="92" r="4" fill="#c94060"/>
<text class="lb" text-anchor="end" x="94" y="76">Transmettre et faire</text>
<text class="lb" text-anchor="end" x="94" y="93">respecter les valeurs</text>
<text class="lb" text-anchor="end" x="94" y="110">de la République.</text>
<polyline class="cn" stroke="#c98a30" points="160,345 100,345 100,452"/>
<circle cx="100" cy="452" r="4" fill="#c98a30"/>
<text class="lb" text-anchor="end" x="94" y="436">Promouvoir l'esprit de</text>
<text class="lb" text-anchor="end" x="94" y="453">responsabilité et le</text>
<text class="lb" text-anchor="end" x="94" y="470">bien commun.</text>
<polyline class="cn" stroke="#7a5bb5" points="520,150 570,150 570,92"/>
<circle cx="570" cy="92" r="4" fill="#7a5bb5"/>
<text class="lb" text-anchor="start" x="576" y="76">Instruire et éduquer</text>
<text class="lb" text-anchor="start" x="576" y="93">pour la réussite et</text>
<text class="lb" text-anchor="start" x="576" y="110">l'insertion professionnelle.</text>
<polyline class="cn" stroke="#1d9d80" points="520,345 570,345 570,452"/>
<circle cx="570" cy="452" r="4" fill="#1d9d80"/>
<text class="lb" text-anchor="start" x="576" y="436">Préparer les élèves à</text>
<text class="lb" text-anchor="start" x="576" y="453">une citoyenneté</text>
<text class="lb" text-anchor="start" x="576" y="470">pleine et entière.</text>
</svg>
</div>

<div class="s">
<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
</svg>
Obligations réglementaires
</h3>
<p>Vous exercez sous l'autorité du chef d'établissement, au sein d'une équipe pédagogique et éducative. Vous êtes tenu au respect des obligations liées à la fonction : <strong>assiduité, ponctualité, neutralité, devoir de réserve, confidentialité, usage du numérique professionnel</strong>, etc.</p>
</div>

<div class="al gn">
<div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
<div>
<strong>Conseil terrain</strong><br>
La première année comme contractuel est souvent dense, beaucoup de choses à découvrir en même temps : les élèves, les collègues, les rythmes de l'établissement, les programmes… C'est tout à fait normal. La plupart des enseignants contractuels décrivent cette période comme intense mais formatrice. S'appuyer sur les collègues proches, observer comment les choses fonctionnent et y aller progressivement sont souvent les meilleurs réflexes.
</div>
</div>
`},

'f2':{n:'F2',t:'Les acteurs du lycée professionnel',s:'Organigramme des interlocuteurs clés',b:`
<div class="s">
<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 680 378" role="img">
<title>Organigramme des acteurs du lycée professionnel</title>
<defs>
<clipPath id="dbc"><rect x="130" y="10" width="420" height="130" rx="14"/></clipPath>
</defs>
<style>
.dbox{transition:transform .24s cubic-bezier(.34,1.56,.64,1),filter .22s ease;cursor:default}
.dbox:hover{transform:translateY(-3px);filter:drop-shadow(0 8px 26px rgba(181,64,112,.42))}
.cd{transition:transform .24s cubic-bezier(.34,1.56,.64,1),filter .22s ease;cursor:pointer}
.cd:hover{transform:translateY(-5px);filter:drop-shadow(0 8px 20px rgba(0,0,0,.22))}
</style>

<g class="dbox">
<rect x="130" y="10" width="420" height="130" rx="14" fill="#fce8f2" stroke="#d4789a" stroke-width="1"/>
<rect x="130" y="10" width="6" height="130" fill="#b54070" clip-path="url(#dbc)"/>
<text x="340" y="34" text-anchor="middle" font-family="'Playfair Display',serif" font-size="14" font-weight="700" fill="#b54070">L'équipe de direction</text>
<line x1="140" y1="42" x2="542" y2="42" stroke="#d4789a" stroke-width="0.5" opacity="0.4"/>
<line x1="354" y1="46" x2="354" y2="130" stroke="#d4789a" stroke-width="0.7" stroke-dasharray="3 2" opacity="0.45"/>

<!-- Gauche -->
<text x="247" y="62" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="13" fill="#2c1a28">Proviseur</text>
<line x1="144" y1="70" x2="348" y2="70" stroke="#d4789a" stroke-width="0.5" opacity="0.3"/>
<text x="192" y="86" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10.5" fill="#6b3a55">Proviseur adjoint</text>
<text x="300" y="86" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10.5" fill="#6b3a55">Secr. général</text>
<line x1="144" y1="95" x2="348" y2="95" stroke="#d4789a" stroke-width="0.5" opacity="0.3"/>
<text x="192" y="111" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10.5" fill="#6b3a55">Secr. de direction</text>
<text x="300" y="111" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10.5" fill="#6b3a55">Secr. d'intendance</text>

<!-- Droite -->
<text x="451" y="62" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="12" fill="#6b3a55">DDFPT<tspan dy="-4" font-size="8">*</tspan></text>
<line x1="362" y1="70" x2="542" y2="70" stroke="#d4789a" stroke-width="0.5" opacity="0.3"/>
<text x="451" y="86" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="12" fill="#6b3a55">RBDE<tspan dy="-4" font-size="8">*</tspan></text>
<line x1="362" y1="95" x2="542" y2="95" stroke="#d4789a" stroke-width="0.5" opacity="0.3"/>
<text x="451" y="111" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10.5" fill="#6b3a55">Secrétaire du DDFPT</text>

<rect x="142" y="132" width="406" height="4" rx="2" fill="#d4789a" opacity="0.4"/>
</g>

<line x1="350" y1="140" x2="350" y2="150" stroke="#d4789a" stroke-width="1.5" stroke-dasharray="4 3"/>
<line x1="53" y1="150" x2="627" y2="150" stroke="#d4789a" stroke-width="1.5" stroke-dasharray="4 3"/>
<line x1="53"  y1="150" x2="53"  y2="168" stroke="#d4789a" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="163" y1="150" x2="163" y2="168" stroke="#d4789a" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="283" y1="150" x2="283" y2="168" stroke="#d4789a" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="400" y1="150" x2="400" y2="168" stroke="#d4789a" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="517" y1="150" x2="517" y2="168" stroke="#d4789a" stroke-width="1" stroke-dasharray="4 3"/>
<line x1="627" y1="150" x2="627" y2="168" stroke="#d4789a" stroke-width="1" stroke-dasharray="4 3"/>
<circle cx="53"  cy="150" r="3" fill="#b54070"/>
<circle cx="163" cy="150" r="3" fill="#b54070"/>
<circle cx="283" cy="150" r="3" fill="#b54070"/>
<circle cx="400" cy="150" r="3" fill="#b54070"/>
<circle cx="517" cy="150" r="3" fill="#b54070"/>
<circle cx="627" cy="150" r="3" fill="#b54070"/>

<g class="cd">
<rect x="10" y="168" width="86" height="24" rx="8" fill="#5a8fc8"/>
<text x="53" y="184" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10" font-weight="800" fill="#fff">Intendance</text>
<rect x="10" y="192" width="86" height="178" rx="10" fill="#e8eff8" stroke="#5a8fc8" stroke-width="0.8"/>
<g transform="translate(41,195)" fill="none" stroke="#5a8fc8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
</g>
<text x="53" y="240" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10.5" font-weight="700" fill="#2c3e5e">Agents de</text>
<text x="53" y="254" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10.5" font-weight="700" fill="#2c3e5e">restauration,</text>
<text x="53" y="268" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10.5" font-weight="700" fill="#2c3e5e">d'entretien</text>
<text x="53" y="282" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10.5" font-weight="700" fill="#2c3e5e">et d'accueil</text>
</g>

<g class="cd">
<rect x="118" y="168" width="90" height="24" rx="8" fill="#8b62c2"/>
<text x="163" y="184" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10" font-weight="800" fill="#fff">Vie scolaire</text>
<rect x="118" y="192" width="90" height="178" rx="10" fill="#ede4f7" stroke="#8b62c2" stroke-width="0.8"/>
<g transform="translate(151,195)" fill="none" stroke="#8b62c2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
<path d="M6 12v5c3 3 9 3 12 0v-5"/>
</g>
<text x="163" y="232" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="11.5" font-weight="700" fill="#4a2a7e">CPE</text>
<text x="163" y="243" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="8" font-style="italic" fill="#6a4a9e">Conseiller principal</text>
<text x="163" y="253" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="8" font-style="italic" fill="#6a4a9e">d'éducation</text>
<line x1="128" y1="261" x2="198" y2="261" stroke="#c4a8ea" stroke-width="0.8"/>
<text x="163" y="274" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="11.5" font-weight="700" fill="#4a2a7e">AED</text>
<text x="163" y="285" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="8" font-style="italic" fill="#6a4a9e">Assistant(e)</text>
<text x="163" y="295" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="8" font-style="italic" fill="#6a4a9e">d'éducation</text>
</g>

<g class="cd">
<rect x="228" y="168" width="110" height="24" rx="8" fill="#c94060"/>
<text x="283" y="184" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10" font-weight="800" fill="#fff">Enseignement</text>
<rect x="228" y="192" width="110" height="178" rx="10" fill="#fce8ef" stroke="#c94060" stroke-width="0.8"/>
<g transform="translate(271,195)" fill="none" stroke="#c94060" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 0 3-3h7z"/>
</g>
<text x="283" y="232" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="11" font-weight="700" fill="#7a1a30">Professeurs</text>
<line x1="244" y1="241" x2="322" y2="241" stroke="#f0b8c8" stroke-width="0.8"/>
<text x="283" y="254" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10.5" font-weight="700" fill="#7a1a30">Prof. documentaliste</text>
<line x1="244" y1="264" x2="322" y2="264" stroke="#f0b8c8" stroke-width="0.8"/>
<text x="283" y="277" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10.5" font-weight="700" fill="#7a1a30">Coordo. ULIS</text>
<line x1="244" y1="287" x2="322" y2="287" stroke="#f0b8c8" stroke-width="0.8"/>
<text x="283" y="300" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10.5" font-weight="700" fill="#7a1a30">AESH</text>
<text x="283" y="311" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="8" font-style="italic" fill="#9a3a50">Accompagnant(e) des élèves</text>
<text x="283" y="321" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="8" font-style="italic" fill="#9a3a50">en situation de handicap</text>
</g>

<g class="cd">
<rect x="358" y="168" width="84" height="24" rx="8" fill="#2d9d80"/>
<text x="400" y="184" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10" font-weight="800" fill="#fff">Informatique</text>
<rect x="358" y="192" width="84" height="178" rx="10" fill="#d8eee5" stroke="#2d9d80" stroke-width="0.8"/>
<g transform="translate(388,195)" fill="none" stroke="#2d9d80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="2" y="3" width="20" height="14" rx="2"/>
<line x1="8" y1="21" x2="16" y2="21"/>
<line x1="12" y1="17" x2="12" y2="21"/>
</g>
<text x="400" y="244" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="11" font-weight="700" fill="#1a5e4a">Référent</text>
<text x="400" y="259" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="11" font-weight="700" fill="#1a5e4a">numérique</text>
</g>

<g class="cd">
<rect x="473" y="168" width="88" height="24" rx="8" fill="#c98a30"/>
<text x="517" y="184" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10" font-weight="800" fill="#fff">Orientation</text>
<rect x="473" y="192" width="88" height="178" rx="10" fill="#fbf0c8" stroke="#c98a30" stroke-width="0.8"/>
<g transform="translate(505,195)" fill="none" stroke="#c98a30" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<circle cx="12" cy="12" r="10"/>
<polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
</g>
<text x="517" y="238" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="12" font-weight="700" fill="#7a5a10">Psy EN</text>
<text x="517" y="249" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="8" font-style="italic" fill="#8a6a20">Psychologue de</text>
<text x="517" y="259" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="8" font-style="italic" fill="#8a6a20">l'Éducation nationale</text>
</g>

<g class="cd">
<rect x="582" y="168" width="90" height="24" rx="8" fill="#d46030"/>
<text x="627" y="178" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="9.5" font-weight="800" fill="#fff">Médico-</text>
<text x="627" y="189" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="9.5" font-weight="800" fill="#fff">sociaux</text>
<rect x="582" y="192" width="90" height="178" rx="10" fill="#f4e8e0" stroke="#d46030" stroke-width="0.8"/>
<g transform="translate(615,195)" fill="none" stroke="#d46030" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<rect x="3" y="3" width="18" height="18" rx="3"/>
<line x1="12" y1="8" x2="12" y2="16"/>
<line x1="8" y1="12" x2="16" y2="12"/>
</g>
<text x="627" y="238" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10.5" font-weight="700" fill="#7a3010">Médecin scolaire</text>
<line x1="596" y1="248" x2="658" y2="248" stroke="#e4c0a8" stroke-width="0.8"/>
<text x="627" y="263" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10.5" font-weight="700" fill="#7a3010">Infirmier(ère)</text>
<line x1="596" y1="273" x2="658" y2="273" stroke="#e4c0a8" stroke-width="0.8"/>
<text x="627" y="290" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10.5" font-weight="700" fill="#7a3010">Assistant(e)</text>
<text x="627" y="304" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10" fill="#a05030">social(e)</text>
</g>


</svg>
<p style="font-size:0.78em;color:#9b6a7e;margin:4px 0 16px;padding-left:2px;line-height:1.7">
* DDFPT : Directeur délégué aux formations professionnelles et technologiques<br>
* RBDE : Responsable du bureau des entreprises
</p>

<style>
.f2-q .bx{
  position:relative;overflow:hidden;
  background:transparent;
  transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s ease,border-color .2s ease;
}
.f2-q .bx::before{
  content:'';position:absolute;left:0;top:0;bottom:0;width:3px;
  background:linear-gradient(180deg,var(--slight),var(--smid));
  border-radius:var(--rs) 0 0 var(--rs);
  opacity:0;transition:opacity .2s ease;
}
.f2-q .bx:hover{
  transform:translateY(-3px);
  box-shadow:0 6px 18px rgba(181,64,112,.14);
  border-color:var(--smid);
}
.f2-q .bx:hover::before{opacity:1}
.f2-q .bx:hover strong{color:var(--sdeep)}
</style>

<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
fill="none" stroke="currentColor" stroke-width="2"
stroke-linecap="round" stroke-linejoin="round"
style="vertical-align:middle;margin-right:6px">
<circle cx="12" cy="12" r="10"/>
<path d="M12 16v.01"/>
<path d="M12 8a2 2 0 0 1 2 2c0 1.5-2 2-2 4"/>
</svg>
Questions fréquentes — Qui contacter ?
</h3>

<div class="g2 f2-q">
<div class="bx"><strong>Je dois signer mon PV d'installation</strong>
Je vais au secrétariat de direction dès mon arrivée.</div>
<div class="bx"><strong>J'ai un problème d'emploi du temps</strong>
Je contacte le proviseur adjoint.</div>
<div class="bx"><strong>Question sur les PFMP ou les ateliers</strong>
Je me rapproche du DDFPT et/ou du PP de la classe concernée.</div>
<div class="bx"><strong>Je dois signaler une absence ou un retard</strong>
Je préviens la vie scolaire ou le secrétariat selon l'organisation locale.</div>
<div class="bx"><strong>Un élève pose des difficultés</strong>
Je ne reste pas seul : j'échange avec le CPE ou l'équipe pédagogique.</div>
<div class="bx"><strong>Je n'arrive pas à accéder à l'ENT ou au matériel numérique</strong>
Je contacte le référent numérique et si urgence, tout collègue susceptible de me répondre.</div>
</div>

</div>
<div class="al gn">
<svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg>
<div>
<strong>Conseil terrain</strong><br>
En début d'année, il est normal de ne pas connaître immédiatement
les interlocuteurs et les habitudes de l'établissement.
En cas de doute, le secrétariat, le CPE ou un collègue de l'équipe
pourront rapidement vous orienter.
</div>

</div>`},

'f3':{n:'F3',t:'Les diplômes préparés',s:'CAP, Bac Pro, BNMA, BP — parcours et passerelles',b:`
<div class="s">
<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px">
<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
</svg>
Les diplômes principaux
</h3>
<p>Le lycée professionnel prépare les élèves aux examens suivants :</p>
<ul>
<li>Le <strong>Certificat d'Aptitude Professionnelle (CAP)</strong>, diplôme de niveau 3, préparé en 2 ans avec plus de <strong>200 spécialités</strong></li>
<li>Le <strong>Baccalauréat professionnel</strong>, diplôme de niveau 4, préparé en 3 ans : <strong>80 spécialités</strong> organisées en <a href="https://www.education.gouv.fr/reussir-au-lycee/les-familles-de-metiers-en-2de-professionnelle-324404" target="_blank"><strong>14 familles de métiers</strong></a> à l'entrée en 2de professionnelle depuis 2019</li>
<li>Le <strong>BMA</strong> (Brevet des Métiers d'Art), diplôme de niveau 4, préparé en 2 ans</li>
<li>Le <strong>BNMA</strong> (Brevet National des Métiers d'Art), diplôme de niveau 4, préparé en 3 ans : nouveauté à la rentrée 2026</li>
</ul>
<p>Des passerelles sont possibles pour passer d'un diplôme à l'autre. Le lycée professionnel peut également accueillir une <strong>classe de 3ème Prépa-Métiers (3PM)</strong> : les élèves passent le DNB en fin d'année.</p>

<div style="width:100%;margin-top:6px">
<svg width="100%" viewBox="0 0 680 610" role="img" xmlns="http://www.w3.org/2000/svg">
<title>Les diplômes préparés — parcours et passerelles</title>
<defs>
<linearGradient id="f3g1" x1="0" y1="0" x2="1" y2="0">
  <stop offset="0" stop-color="#60a5fa"/><stop offset="1" stop-color="#2563eb"/>
</linearGradient>
<marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
<marker id="arrow-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
<marker id="arr-green-dark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#17803d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
<marker id="arr-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
<marker id="arr-orange-dark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#c75200" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
<marker id="arr-orange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#ea580c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
<marker id="arr-orange-light" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#f97316" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
<marker id="arr-red-dark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#b91c1c" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
<marker id="arr-red" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
<marker id="arr-red-light" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
<marker id="arr-violet" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
<marker id="arr-blue-dark" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#1e40af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
<marker id="arr-blue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
<marker id="arr-gray" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#6b7280" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
<marker id="arr-slate" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#374151" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
<marker id="arr-rose" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#e11d48" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker><marker id="arr-brown" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
  <path d="M2 1L8 5L2 9" fill="none" stroke="#92400e" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</marker>
</defs>

<style>
.dk{transition:filter .22s,transform .26s cubic-bezier(.34,1.56,.64,1);transform-box:fill-box;transform-origin:center;cursor:default}
.dk:hover{filter:brightness(1.09) drop-shadow(0 6px 16px rgba(0,0,0,.22));transform:translateY(-3px)}
</style>

<!-- ROW 0 — Niveau 5+ -->
<g class="dk">
  <rect x="200" y="14" width="280" height="44" rx="8" fill="#fef3c7" stroke="#fcd34d" stroke-width="1"/>
  <text x="340" y="32" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10" font-weight="800" fill="#78350f">Diplômes niveau 5 et +</text>
  <text x="340" y="47" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="9" fill="#92400e">Licence · Master · Ingénieur · DECF…</text>
</g>

<!-- ROW 1 — Études sup | Vie active -->
<g class="dk">
  <rect x="34" y="76" width="354" height="44" rx="8" fill="#dbeafe" stroke="#93c5fd" stroke-width="1"/>
  <text x="211" y="94" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10" font-weight="800" fill="#1e3a5f">Études supérieures</text>
  <text x="211" y="109" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="9" fill="#1e40af">BTS · BUT · Université · DN MADE</text>
</g>
<g class="dk">
  <rect x="406" y="76" width="240" height="44" rx="8" fill="#fee2e2" stroke="#fca5a5" stroke-width="1"/>
  <text x="526" y="94" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10" font-weight="800" fill="#7f1d1d">Vie active</text>
  <text x="526" y="109" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="9" fill="#991b1b">Insertion professionnelle</text>
</g>

<!-- ROW 2 — Spécialisations -->
<g class="dk">
  <rect x="34" y="144" width="190" height="44" rx="8" fill="#ede9fe" stroke="#c4b5fd" stroke-width="1"/>
  <text x="129" y="162" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="10" font-weight="800" fill="#3b0764">Spécialisations</text>
  <text x="129" y="176" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="9" fill="#5b21b6">BP · BMA · CS · FCIL · Niv. 4</text>
</g>

<!-- ROW 3 — Terminale Bac Pro + BNMA 3e -->
<g class="dk">
  <rect x="230" y="212" width="170" height="48" rx="10" fill="#c75200" stroke="#ea580c" stroke-width="1"/>
  <text x="315" y="231" text-anchor="middle" font-family="'Playfair Display',serif" font-size="12" font-weight="700" fill="#fff">Terminale Bac Pro</text>
  <text x="315" y="248" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="8.5" font-weight="800" fill="rgba(255,255,255,.95)">✓ Diplôme · Niveau 4</text>
</g>
<g class="dk">
  <rect x="426" y="212" width="170" height="48" rx="10" fill="#b91c1c" stroke="#dc2626" stroke-width="1"/>
  <text x="511" y="231" text-anchor="middle" font-family="'Playfair Display',serif" font-size="12" font-weight="700" fill="#fff">BNMA 3ème année</text>
  <text x="511" y="248" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="8.5" font-weight="800" fill="rgba(255,255,255,.95)">✓ Diplôme · Niveau 4</text>
</g>

<!-- ROW 3.5 — CAP 2ème année (entre Première et Terminale) -->
<g class="dk">
  <rect x="34" y="282" width="170" height="48" rx="10" fill="#17803d" stroke="#15803d" stroke-width="1"/>
  <text x="119" y="301" text-anchor="middle" font-family="'Playfair Display',serif" font-size="12" font-weight="700" fill="#fff">CAP 2ème année</text>
  <text x="119" y="318" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="8.5" font-weight="800" fill="rgba(255,255,255,.95)">✓ Diplôme · Niveau 3</text>
</g>

<!-- ROW 4 — Première Bac Pro + BNMA 2e -->
<g class="dk">
  <rect x="230" y="352" width="170" height="46" rx="10" fill="#ea580c" stroke="#ea580c" stroke-width="1"/>
  <text x="315" y="378" text-anchor="middle" font-family="'Playfair Display',serif" font-size="12" font-weight="700" fill="#fff">Première Bac Pro</text>
</g>
<g class="dk">
  <rect x="426" y="352" width="170" height="46" rx="10" fill="#dc2626" stroke="#dc2626" stroke-width="1"/>
  <text x="511" y="378" text-anchor="middle" font-family="'Playfair Display',serif" font-size="12" font-weight="700" fill="#fff">BNMA 2ème année</text>
</g>

<!-- ROW 5 — CAP 1ère + Seconde Bac Pro + BNMA 1ère (même niveau) -->
<g class="dk">
  <rect x="34" y="420" width="170" height="46" rx="10" fill="#22c55e" stroke="#15803d" stroke-width="1"/>
  <text x="119" y="446" text-anchor="middle" font-family="'Playfair Display',serif" font-size="12" font-weight="700" fill="#fff">CAP 1ère année</text>
</g>
<g class="dk">
  <rect x="230" y="420" width="170" height="46" rx="10" fill="#f97316" stroke="#ea580c" stroke-width="1"/>
  <text x="315" y="446" text-anchor="middle" font-family="'Playfair Display',serif" font-size="12" font-weight="700" fill="#fff">Seconde Bac Pro</text>
</g>
<g class="dk">
  <rect x="426" y="420" width="170" height="46" rx="10" fill="#ef4444" stroke="#dc2626" stroke-width="1"/>
  <text x="511" y="446" text-anchor="middle" font-family="'Playfair Display',serif" font-size="12" font-weight="700" fill="#fff">BNMA 1ère année</text>
</g>

<!-- ROW 6 — Classe de 3e -->
<g class="dk">
  <rect x="34" y="490" width="608" height="58" rx="29" fill="url(#f3g1)"/>
  <circle cx="80" cy="519" r="22" fill="rgba(255,255,255,.18)"/>
  <g transform="translate(68,507)" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="12 2 22 8.5 12 15 2 8.5"/>
    <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3V11.5"/>
  </g>
  <text x="370" y="514" text-anchor="middle" font-family="'Playfair Display',serif" font-size="14" font-weight="700" fill="#fff">Classe de Troisième</text>
  <text x="370" y="534" text-anchor="middle" font-family="'Nunito',sans-serif" font-size="9.5" fill="rgba(255,255,255,.85)">ou 3ème Prépa-Métiers (3PM)</text>
</g>

<!-- FLÈCHES DEPUIS LA 3e vers 1ères années -->
<line x1="119" y1="490" x2="119" y2="466" stroke="#22c55e" stroke-width="2" marker-end="url(#arr-green)"/>
<line x1="315" y1="490" x2="315" y2="466" stroke="#f97316" stroke-width="2" marker-end="url(#arr-orange-light)"/>
<line x1="511" y1="490" x2="511" y2="466" stroke="#ef4444" stroke-width="2" marker-end="url(#arr-red-light)"/>

<!-- PROGRESSIONS CAP -->
<line x1="119" y1="420" x2="119" y2="330" stroke="#17803d" stroke-width="2" marker-end="url(#arr-green-dark)"/>

<!-- PROGRESSION CAP 2e → Spécialisations -->
<line x1="119" y1="282" x2="119" y2="188" stroke="#17803d" stroke-width="2" marker-end="url(#arr-green-dark)"/>

<!-- FLÈCHE CAP 2e → Vie active -->
<path d="M204,306 L655,306 L655,98 L646,98" fill="none" stroke="#e11d48" stroke-width="1.4" marker-end="url(#arr-rose)"/>

<path d="M224,166 L526,166 L526,120" fill="none" stroke="#7c3aed" stroke-width="1.4" marker-end="url(#arr-violet)"/>

<!-- PROGRESSIONS Bac Pro -->
<line x1="315" y1="420" x2="315" y2="398" stroke="#ea580c" stroke-width="2" marker-end="url(#arr-orange)"/>
<line x1="315" y1="352" x2="315" y2="260" stroke="#c75200" stroke-width="2" marker-end="url(#arr-orange-dark)"/>

<!-- PROGRESSIONS BNMA -->
<line x1="511" y1="420" x2="511" y2="398" stroke="#dc2626" stroke-width="2" marker-end="url(#arr-red)"/>
<line x1="511" y1="352" x2="511" y2="260" stroke="#b91c1c" stroke-width="2" marker-end="url(#arr-red-dark)"/>

<!-- POURSUITES SUPÉRIEURES -->
<line x1="144" y1="144" x2="144" y2="120" stroke="#7c3aed" stroke-width="1.4" stroke-dasharray="5 3" marker-end="url(#arr-violet)"/>
<line x1="295" y1="212" x2="250" y2="120" stroke="#c75200" stroke-dasharray="4 3" stroke-width="1.4" marker-end="url(#arr-orange-dark)"/>
<line x1="460" y1="218" x2="360" y2="120" stroke="#b91c1c" stroke-dasharray="4 3" stroke-width="1.4" marker-end="url(#arr-red-dark)"/>
<line x1="350" y1="212" x2="470" y2="120" stroke="#c75200" stroke-width="1.2"  marker-end="url(#arr-orange-dark)"/>
<line x1="560" y1="228" x2="560" y2="120" stroke="#b91c1c" stroke-width="1.2"  marker-end="url(#arr-red-dark)"/>
<line x1="300" y1="76" x2="318" y2="58" stroke="#1e40af" stroke-dasharray="4 3" stroke-width="1.5" marker-end="url(#arr-blue-dark)"/>
<line x1="388" y1="98" x2="406" y2="98" stroke="#1e40af"  stroke-width="1.4" marker-end="url(#arr-blue-dark)"/>
<path d="M480,36 L526,36 L526,76" fill="none" stroke="#92400e" stroke-width="1.4" marker-end="url(#arr-brown)"/>

<!-- PASSERELLES CAP → BAC PRO -->
<line x1="204" y1="306" x2="230" y2="352" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="5 4" marker-end="url(#arrow-blue)"/>
<line x1="230" y1="420" x2="204" y2="330" stroke="#2563eb" stroke-width="1.8" stroke-dasharray="5 4" marker-end="url(#arrow-blue)"/>

<!-- LÉGENDE -->
<rect x="34" y="566" width="612" height="36" rx="8" fill="rgba(0,0,0,.03)" stroke="rgba(0,0,0,.07)" stroke-width="0.8"/>
<rect x="130" y="579" width="10" height="10" rx="2" fill="#17803d"/>
<text x="144" y="588" font-family="'Nunito',sans-serif" font-size="9" fill="#374151">CAP</text>
<rect x="175" y="579" width="10" height="10" rx="2" fill="#7c3aed"/>
<text x="189" y="588" font-family="'Nunito',sans-serif" font-size="9" fill="#374151">BP/BMA/CS</text>
<rect x="253" y="579" width="10" height="10" rx="2" fill="#c75200"/>
<text x="267" y="588" font-family="'Nunito',sans-serif" font-size="9" fill="#374151">Bac Pro</text>
<rect x="320" y="579" width="10" height="10" rx="2" fill="#b91c1c"/>
<text x="334" y="588" font-family="'Nunito',sans-serif" font-size="9" fill="#374151">BNMA</text>
<line x1="370" y1="584" x2="392" y2="584" stroke="#6b7280" stroke-width="1.5" stroke-dasharray="5 3" marker-end="url(#arr-gray)"/>
<text x="396" y="588" font-family="'Nunito',sans-serif" font-size="9" fill="#374151">Passerelle</text>
<line x1="455" y1="584" x2="477" y2="584" stroke="#374151" stroke-width="1.8" marker-end="url(#arr-slate)"/>
<text x="481" y="588" font-family="'Nunito',sans-serif" font-size="9" fill="#374151">Progression</text>

</svg>
</div></div>
<div class="s">
<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px">
<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
</svg>
Passerelles et spécialisations
</h3>
<ul>
<li>Des passerelles sont possibles pour passer d'un diplôme à l'autre dans les deux sens.</li>
<li>Après un CAP ou un Bac Pro : <strong>CS </strong>(Certificat de Spécialisation)</strong>, préparé en 1 an, permettant une spécialisation dans certains secteurs.</li>
<li>Après un CAP, Bac Pro ou BTS : <strong>FCIL</strong> (Formation Complémentaire d'Initiative Locale), durée minimale 3 mois, en alternance, <em>non certifiante</em>.</li>
<li>Après certaines spécialités de CAP des métiers d'art : <strong>BMA</strong> (Brevet des Métiers d'Art), niveau 4, en 2 ans. Parcours maintenu en parallèle du BNMA.</li>
<li>Le <strong>BP (Brevet Professionnel)</strong>, diplôme de niveau 4, permet d'approfondir une spécialité professionnelle, souvent après un CAP, notamment en alternance.</li>
<li>Après le Bac Pro, le BNMA ou certains BP : poursuite vers le <strong>DN MADE</strong> (Diplôme national des métiers d'art et du design) pour les filières artistiques et créatives.</li>
</ul>
</div>

<div class="s">
<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px">
<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
</svg>
Le BNMA — nouveau diplôme des métiers d'art
</h3>
<p>Créé par le <a href="https://www.education.gouv.fr/metiers-d-art-creation-du-brevet-national-des-metiers-d-arts-bnma-pour-renforcer-l-attractivite-des-469898" target="_blank"><strong>décret n° 2026-88 du 13 février 2026</strong></a>, le BNMA (Brevet National des Métiers d'Art) remplace progressivement le BMA. Il se prépare en <strong>3 ans après la 3ème</strong> et confère les mêmes droits que le baccalauréat (<strong>niveau 4</strong>).</p>
<ul>
<li><strong>4 premières spécialités dès la rentrée 2026</strong> : bijouterie, maroquinerie de haute facture, ébénisterie, horlogerie (1ère session d'examen en 2029).</li>
<li><strong>Les CAP métiers d'art ne sont pas supprimés</strong> : un parcours progressif (CAP + 2 ans de BNMA) reste possible.</li>
<li>Poursuite d'études vers le <strong>DN MADE</strong> (Diplôme national des métiers d'art et du design), un certificat de spécialisation ou l'enseignement supérieur.</li>
</ul>
</div>

<div class="al gn">
<div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
<div>
<strong>Conseil terrain</strong><br>
Savoir assez tôt <strong>quels diplômes sont préparés dans votre établissement</strong> (CAP, Bac Pro, BNMA…)  peut aider à mieux comprendre les rythmes de l'année et les attendus pédagogiques, qui diffèrent selon les parcours. Le <strong>référentiel du diplôme</strong> de votre spécialité est aussi un document précieux : votre DDFPT ou un collègue pourra généralement vous aider à le trouver.
</div>
</div>
`},

'f4':{n:'F4',t:'Les PFMP',s:'Périodes de Formation en Milieu Professionnel — cadre & exploitation',b:`

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
    Définition
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Les PFMP (<strong>Périodes de Formation en Milieu Professionnel</strong>) sont des périodes temporaires de mise en situation en entreprise, intégrées à la formation. Placé sous la responsabilité d'un <strong>tuteur</strong>, l'élève y acquiert des compétences professionnelles en complément des apprentissages réalisés en lycée. Elles sont <strong>obligatoires et évaluées pour le CAP, le Bac Pro et le BNMA.</strong>
  </div>
  <div class="bx gn" style="margin-top:8px">
    <strong>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:4px"><circle cx="12" cy="12" r="10"/><path d="M2 12h4M18 12h4M12 2v4M12 18v4"/><path d="M6.34 6.34l2.83 2.83M14.83 14.83l2.83 2.83M17.66 6.34l-2.83 2.83M9.17 14.83l-2.83 2.83"/></svg>
      Erasmus+
    </strong>
    Les PFMP peuvent se dérouler à l'étranger dans le cadre d'une mobilité Erasmus+.
  </div>
</div>

<div class="s">
  <h3>
    <svg width="100%" viewBox="0 0 680 260" xmlns="http://www.w3.org/2000/svg" role="img">
  <title>Durées des PFMP par diplôme</title>
  <desc>Graphique en barres horizontales des durées réglementaires de PFMP pour CAP 2 ans, CAP 1 an, Bac Pro 3 ans et BNMA 3 ans</desc>

  <!-- Lignes de grille -->
  <line x1="200" y1="10" x2="200" y2="215" stroke="#f2c0d4" stroke-width="0.5"/>
  <line x1="262" y1="10" x2="262" y2="215" stroke="#f2c0d4" stroke-width="0.5"/>
  <line x1="324" y1="10" x2="324" y2="215" stroke="#f2c0d4" stroke-width="0.5"/>
  <line x1="386" y1="10" x2="386" y2="215" stroke="#f2c0d4" stroke-width="0.5"/>
  <line x1="448" y1="10" x2="448" y2="215" stroke="#f2c0d4" stroke-width="0.5"/>
  <line x1="510" y1="10" x2="510" y2="215" stroke="#f2c0d4" stroke-width="0.5"/>
  <line x1="610" y1="10" x2="610" y2="215" stroke="#f2c0d4" stroke-width="0.5"/>

  <!-- Graduations -->
  <text x="200" y="232" text-anchor="middle" fill="#9b6a7e" font-family="sans-serif" font-size="10">0</text>
  <text x="262" y="232" text-anchor="middle" fill="#9b6a7e" font-family="sans-serif" font-size="10">4 sem.</text>
  <text x="324" y="232" text-anchor="middle" fill="#9b6a7e" font-family="sans-serif" font-size="10">8 sem.</text>
  <text x="386" y="232" text-anchor="middle" fill="#9b6a7e" font-family="sans-serif" font-size="10">12 sem.</text>
  <text x="448" y="232" text-anchor="middle" fill="#9b6a7e" font-family="sans-serif" font-size="10">16 sem.</text>
  <text x="510" y="232" text-anchor="middle" fill="#9b6a7e" font-family="sans-serif" font-size="10">20 sem.</text>
  <text x="610" y="232" text-anchor="middle" fill="#9b6a7e" font-family="sans-serif" font-size="10">26 sem.</text>

  <!-- CAP 2 ans -->
  <text x="4" y="36" fill="#2c1a28" font-family="sans-serif" font-size="12" font-weight="800">CAP 2 ans</text>
  <a href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000038489446/" target="_blank">
    <text x="4" y="50" fill="#9b6a7e" font-family="sans-serif" font-size="10" text-decoration="underline" cursor="pointer">Arrêté 19/04/2019</text>
  </a>
  <rect x="200" y="20" width="230" height="22" rx="4" fill="#fce8f2" stroke="#f2c0d4" stroke-width="0.5"/>
  <rect x="200" y="22" width="185" height="18" rx="3" fill="#b54070"/>
  <rect x="385" y="22" width="45" height="18" rx="2" fill="#d4789a" opacity="0.5"/>
  <text x="293" y="35" text-anchor="middle" fill="#fff" font-family="sans-serif" font-size="11" font-weight="700">12 à 14 sem.</text>

  <!-- CAP 1 an -->
  <text x="4" y="86" fill="#2c1a28" font-family="sans-serif" font-size="12" font-weight="800">CAP 1 an</text>
  <text x="4" y="100" fill="#9b6a7e" font-family="sans-serif" font-size="10">cas particulier</text>
  <rect x="200" y="70" width="77" height="22" rx="4" fill="#fce8f2" stroke="#f2c0d4" stroke-width="0.5"/>
  <rect x="200" y="72" width="77" height="18" rx="3" fill="#9b6a7e"/>
  <text x="239" y="85" text-anchor="middle" fill="#fff" font-family="sans-serif" font-size="11" font-weight="700">min. 5 sem.</text>

  <!-- Bac Pro 3 ans -->
  <text x="4" y="136" fill="#2c1a28" font-family="sans-serif" font-size="12" font-weight="800">Bac Pro 3 ans</text>
  <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049083922" target="_blank">
    <text x="4" y="150" fill="#9b6a7e" font-family="sans-serif" font-size="10" text-decoration="underline" cursor="pointer">Arrêté 22/01/2024</text>
  </a>
  <rect x="200" y="120" width="310" height="22" rx="4" fill="#fce8f2" stroke="#f2c0d4" stroke-width="0.5"/>
  <rect x="200" y="122" width="248" height="18" rx="3" fill="#7a1f45"/>
  <rect x="448" y="122" width="62" height="18" rx="2" fill="#b54070" opacity="0.5"/>
  <text x="355" y="135" text-anchor="middle" fill="#fff" font-family="sans-serif" font-size="11" font-weight="700">16 à 20 sem.</text>

  <!-- BNMA 3 ans -->
  <text x="4" y="186" fill="#2c1a28" font-family="sans-serif" font-size="12" font-weight="800">BNMA 3 ans</text>
  <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000053482524" target="_blank">
    <text x="4" y="200" fill="#9b6a7e" font-family="sans-serif" font-size="10" text-decoration="underline" cursor="pointer">Décret n°2026-88</text>
  </a>
  <rect x="200" y="170" width="410" height="22" rx="4" fill="#fdf6f0" stroke="#e4c8b0" stroke-width="0.5"/>
  <rect x="200" y="172" width="185" height="18" rx="3" fill="#c9885a"/>
  <rect x="385" y="172" width="225" height="18" rx="2" fill="#c9885a" opacity="0.4"/>
  <text x="400" y="185" text-anchor="middle" fill="#fff" font-family="sans-serif" font-size="11" font-weight="700">12 à 26 sem.</text>
</svg>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    Exploitation pédagogique
  </h3>

  <!-- Ligne de temps visuelle : AVANT → PFMP → APRÈS -->
  <div style="display:flex;align-items:stretch;gap:0;margin:10px 0 14px;border-radius:10px;overflow:hidden;border:1.5px solid #f2c0d4">
    <div style="flex:1;background:#fce8f2;padding:12px 14px">
      <div style="font-size:11px;font-weight:800;color:#7a1f45;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">◀ En amont</div>
      <div style="font-size:12.5px;color:#2c1a28;line-height:1.5">Définir des <strong>objectifs précis</strong> par discipline, adaptés à chaque organisme d'accueil.<br>Préparer l'élève à observer et à agir avec intention.</div>
    </div>
    <div style="width:2px;background:#f2c0d4;flex-shrink:0"></div>
    <div style="flex:1;background:linear-gradient(135deg,#7a1f45,#b54070);padding:12px 14px;display:flex;align-items:center;justify-content:center">
      <div style="text-align:center">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
<rect x="2" y="7" width="20" height="15" rx="1"/>
<path d="M16 22V7"/>
<path d="M8 22V7"/>
<path d="M2 12h20"/>
<path d="M2 17h20"/>
<path d="M6 2h12l2 5H4z"/>
</svg>
<div style="font-size:13px;font-weight:800;color:#fff;margin-top:4px">PFMP</div>
        <div style="font-size:10.5px;color:rgba(255,255,255,.78);margin-top:2px">En entreprise</div>
      </div>
    </div>
    <div style="width:2px;background:#f2c0d4;flex-shrink:0"></div>
    <div style="flex:1;background:#edf7f0;padding:12px 14px">
      <div style="font-size:11px;font-weight:800;color:#1d6b48;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">En aval ▶</div>
      <div style="font-size:12.5px;color:#2c1a28;line-height:1.5">Organiser une <strong>restitution</strong> des expériences vécues en entreprise pour valoriser et consolider les compétences.</div>
    </div>
  </div>
</div>

<div class="al gn">
  <div class="ai">
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.6 10.3 18 9 18 8a6 6 0 0 0-12 0c0 1 .4 2.3 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
  </div>
  <div>
    <strong>Conseil terrain</strong><br>
    Le <strong>calendrier des PFMP</strong> structure tout le rythme de l'année, le repérer assez tôt peut aider à planifier votre progression sans mauvaise surprise lors des semaines d'absence des élèves. En MPC, s'appuyer sur des <strong>situations ancrées dans le secteur professionnel</strong> des élèves est souvent une façon naturelle de donner du sens aux activités, les contextes métier parlent généralement bien aux élèves.
  </div>
</div>

`},

'f5':{n:'F5',t:'Réforme de la voie professionnelle (les grandes lignes)',s:'Les 12 mesures synthétisées',b:`
<style>
.f5-axes{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin:6px 0 0}
.f5-ax{border-radius:var(--r);overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default}
.f5-ax:hover{transform:translateY(-5px);box-shadow:0 12px 28px rgba(0,0,0,.18)}
.f5-ah{padding:13px 13px 11px;position:relative;overflow:hidden}
.f5-bg{position:absolute;top:-10px;right:-4px;font-family:'Playfair Display',serif;font-size:64px;font-weight:900;line-height:1;opacity:.18;color:#fff;pointer-events:none}
.f5-ai{width:30px;height:30px;border-radius:50%;background:rgba(255,255,255,.22);border:1.5px solid rgba(255,255,255,.38);display:flex;align-items:center;justify-content:center;margin-bottom:7px}
.f5-ai svg{width:14px;height:14px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.f5-at{font-family:'Playfair Display',serif;font-size:11.5px;font-weight:700;color:#fff;line-height:1.35;position:relative;z-index:1}
.f5-ab{padding:8px 10px;background:var(--white);display:flex;flex-direction:column;gap:4px}
.f5-m{display:flex;align-items:flex-start;gap:6px;font-size:10.5px;line-height:1.4}
.f5-mn{width:17px;height:17px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:8.5px;font-weight:800;color:#fff;flex-shrink:0;margin-top:1px}
.f5-mt{color:var(--tmid)}
.f5-a1 .f5-ah{background:#c94060}.f5-a1{border:1.5px solid #f0b8c8}
.f5-a1 .f5-mn{background:#c94060}
.f5-a2 .f5-ah{background:#c98a30}.f5-a2{border:1.5px solid #f0d080}
.f5-a2 .f5-mn{background:#c98a30}
.f5-a3 .f5-ah{background:#1d9d80}.f5-a3{border:1.5px solid #a0ddd0}
.f5-a3 .f5-mn{background:#1d9d80}
.f5-disp{display:grid;grid-template-columns:1fr 1fr;gap:7px;margin:6px 0 0}
.f5-bx{border-radius:var(--rs);padding:8px 11px;border:1.5px solid;font-size:11px;line-height:1.45;transition:transform .22s cubic-bezier(.34,1.56,.64,1),box-shadow .2s;position:relative;overflow:hidden}
.f5-bx::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;opacity:0;transition:opacity .2s}
.f5-bx:hover{transform:translateY(-3px);box-shadow:0 6px 18px rgba(0,0,0,.12)}
.f5-bx:hover::before{opacity:1}
.f5-bx strong{display:block;font-size:9.5px;font-weight:800;letter-spacing:.06em;margin-bottom:3px}
.f5-bx.c1{background:transparent;border-color:#d47090;color:var(--tmid)}.f5-bx.c1 strong{color:#c94060}.f5-bx.c1::before{background:#c94060}
.f5-bx.c2{background:transparent;border-color:#a0c0e8;color:var(--tmid)}.f5-bx.c2 strong{color:#4a80c0}.f5-bx.c2::before{background:#4a80c0}
.f5-bx.c3{background:transparent;border-color:#2aaa8a;color:var(--tmid)}.f5-bx.c3 strong{color:#1d9d80}.f5-bx.c3::before{background:#1d9d80}
.f5-bx.c4{background:transparent;border-color:#b090d8;color:var(--tmid)}.f5-bx.c4 strong{color:#7a5bb5}.f5-bx.c4::before{background:#7a5bb5}
@media(max-width:520px){.f5-axes,.f5-disp{grid-template-columns:1fr}}
</style>

<div class="s">
<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px">
<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
</svg>
Objectif de la réforme
</h3>
<p>La réforme des lycées professionnels vise à assurer l'avenir de tous les élèves, au plus près de leurs besoins et de leurs aspirations, et à répondre à la promesse républicaine d'égalité des chances.</p>
<p>L'objectif est de faire du lycée professionnel une voie de réussite, <strong>choisie par les élèves</strong>, reconnue par la société et les entreprises, offrant de meilleures conditions d'exercice du métier aux enseignants.</p>
</div>

<div class="s">
<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px">
<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
</svg>
Les 3 grands axes — <a href="https://eduscol.education.gouv.fr/5631/reforme-des-lycees-professionnels" target="_blank">12 mesures</a>
</h3>
<div class="f5-axes">

<div class="f5-ax f5-a1">
<div class="f5-ah">
<div class="f5-bg">1</div>
<div class="f5-ai"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/></svg></div>
<div class="f5-at">Lutter contre le décrochage scolaire</div>
</div>
<div class="f5-ab">
<div class="f5-m"><span class="f5-mn">1</span><span class="f5-mt">Orientation renforcée en 3e (Avenir(s))</span></div>
<div class="f5-m"><span class="f5-mn">2</span><span class="f5-mt">Maths &amp; français en groupes réduits</span></div>
<div class="f5-m"><span class="f5-mn">3</span><span class="f5-mt">Gratification des PFMP revalorisée</span></div>
<div class="f5-m"><span class="f5-mn">5</span><span class="f5-mt">3 parcours anti-décrochage</span></div>
</div>
</div>

<div class="f5-ax f5-a2">
<div class="f5-ah">
<div class="f5-bg">2</div>
<div class="f5-ai"><svg viewBox="0 0 24 24"><path d="M22 10 12 4 2 10l10 6 10-6Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg></div>
<div class="f5-at">Améliorer la réussite dans les poursuites d'études</div>
</div>
<div class="f5-ab">
<div class="f5-m"><span class="f5-mn">4</span><span class="f5-mt">Terminale orientée vers le projet de l'élève</span></div>
<div class="f5-m"><span class="f5-mn">7</span><span class="f5-mt">Passerelles vers le BTS renforcées</span></div>
<div class="f5-m"><span class="f5-mn">8</span><span class="f5-mt">Accès facilité à la prépa compétences</span></div>
<div class="f5-m"><span class="f5-mn">9</span><span class="f5-mt">BTS en lycée professionnel développé</span></div>
</div>
</div>

<div class="f5-ax f5-a3">
<div class="f5-ah">
<div class="f5-bg">3</div>
<div class="f5-ai"><svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div>
<div class="f5-at">Améliorer l'insertion professionnelle des lycéens</div>
</div>
<div class="f5-ab">
<div class="f5-m"><span class="f5-mn">6</span><span class="f5-mt">Partenariats entreprises renforcés</span></div>
<div class="f5-m"><span class="f5-mn">10</span><span class="f5-mt">Carte des formations adaptée aux territoires</span></div>
<div class="f5-m"><span class="f5-mn">11</span><span class="f5-mt">Revalorisation des enseignants</span></div>
<div class="f5-m"><span class="f5-mn">12</span><span class="f5-mt">Amélioration des conditions d'exercice</span></div>
</div>
</div>

</div>
</div>

<div class="s">
<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</svg>
Dispositifs clés pour l'enseignant
</h3>
<div class="f5-disp">
<div class="f5-bx c1">
<strong>MESURE 2</strong>
Cours de mathématiques et cours de français en
<span style="font-weight:700;">groupes à effectifs réduits</span>
en 2de et 1ère professionnelle.
</div>
<div class="f5-bx c2"><strong>MESURE 4</strong>Organiser la Terminale en lien avec le projet de l'élève (emploi ou poursuite d'études).</div>
<div class="f5-bx c4"><strong>MESURE 5 — ANTI-DÉCROCHAGE</strong><em>Tous droits ouverts</em> : solution si décrochage en cours · <em>Avenir Pro</em> : ateliers emploi France Travail en terminale · <em>Avenir Pro+</em> : suivi post-lycée sans solution · <em>Parcours de consolidation</em> : BTS en risque d'échec.</div>
<div class="f5-bx c3"><strong>MESURE 6</strong>Mieux préparer l'insertion professionnelle grâce à des partenariats extérieurs.</div>
</div>
</div>

<div class="al gn">
<div class="ai"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5C17.6 10.3 18 9 18 8a6 6 0 0 0-12 0c0 1 .4 2.3 1.5 3.5.8.8 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg></div>
<div>
<strong>Conseil terrain</strong><br>
En tant que contractuel, vous n'êtes pas directement pilote de la réforme mais vous en êtes un acteur quotidien. Comprendre ses grands axes peut aider à donner du sens à certains choix d'organisation et à participer plus sereinement aux échanges avec l'équipe pédagogique. Si quelque chose vous semble flou, un collègue ou le chef d'établissement sont souvent les meilleurs interlocuteurs pour y voir clair rapidement.
</div>
</div>`},

'f6':{n:'F6',t:'Le suivi par l\'inspection',s:'Visites conseil et accompagnement des contractuels',b:`
<style>
  .f6c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
  .f6c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
  .f6c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
  .f6c:hover::before{opacity:1}
</style>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    Visite conseil ≠ rendez-vous de carrière
  </h3>
  <p>Le suivi des enseignants contractuels par l'inspection s'inscrit dans une logique d'<strong>accompagnement professionnel</strong> pas d'évaluation au sens du PPCR. Il vise à repérer les points d'appui, identifier les besoins de formation et accompagner la prise de fonction puis l'évolution professionnelle.</p>
  <div class="al"><div class="ai"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div><div>Le <strong>rendez-vous de carrière PPCR</strong> (calendrier formalisé, notification 15 jours avant, document national d'appui, évaluation aux 6<sup>e</sup>, 8<sup>e</sup> et 9<sup>e</sup> échelons) concerne les <strong>titulaires</strong>. Les contractuels relèvent d'un cadre de <strong>suivi et d'accompagnement</strong> distinct.</div></div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    Le rythme des visites
  </h3>
  <p>Conformément à la <a href="https://www.legifrance.gouv.fr/circulaire/id/41961" target="_blank" rel="noopener" style="color:#b54070;text-decoration:underline">circulaire n°2017-038 du 20 mars 2017</a>, un agent contractuel bénéficie d'une évaluation tous les trois ans. Dans la pratique de l'inspection :</p>
  <div class="g2" style="grid-template-columns:repeat(2,1fr);gap:10px">
    <div class="f6c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong>2<sup>ème</sup> ou 3<sup>ème</sup> année</strong><span style="font-size:12px;display:block;margin-top:4px">Visite de suivi, point d'étape sur l'évolution des pratiques et la consolidation des acquis.</span></div>
    <div class="f6c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong>5<sup>e</sup> année</strong><span style="font-size:12px;display:block;margin-top:4px">Visite avant la perspective d'une éventuelle CDIsation, bilan sur le parcours.</span></div>
    <div class="f6c bx" style="background:transparent;border:1px solid #e8820a;border-left:3px solid #e8820a;--bar:#e8820a"><strong>Sur besoin identifié</strong><span style="font-size:12px;display:block;margin-top:4px">Par l'agent, l'établissement ou l'inspection à tout moment, sur demande motivée.</span></div>
    <div class="f6c bx" style="background:transparent;border:1px solid #7a5bb5;border-left:3px solid #7a5bb5;--bar:#7a5bb5"><strong>Après CDIsation</strong><span style="font-size:12px;display:block;margin-top:4px">Évaluation tous les trois ans dans la mesure du possible.</span></div>
  </div>
  
 <p>Un <strong>entretien annuel avec le chef d'établissement</strong> sur la manière de servir et la poursuite du contrat est par ailleurs préconisé.</p>
</div>
  <div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    L'organisation pratique
  </h3>
  <p>La visite conseil est annoncée par l'<strong>intermédiaire du chef d'établissement</strong>, qui transmet la date proposée par l'inspection. <strong>Aucun délai réglementaire de prévenance n'est fixé</strong> l'organisation se fait en concertation entre l'inspection et l'établissement.</p>
  <p>Le jour J : observation d'une séance en classe, suivie d'un entretien avec l'inspecteur. Selon les situations, un entretien complémentaire avec le chef d'établissement peut être organisé. Un compte rendu écrit est transmis à l'agent et au chef d'établissement ; en cas de désaccord sur son contenu, un <strong>droit de réponse</strong> peut y être annexé.</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    Les documents à présenter
  </h3>
  <p>Le CTEN <strong>fournira à l'inspecteur tous les documents permettant d'apprécier son travail depuis la prise de poste</strong>, sans liste limitative :</p>
  <div class="g2" style="grid-template-columns:repeat(2,1fr);gap:10px;margin-top:8px">
    <div class="f6c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070"><strong>Progressions &amp; programmations</strong><span style="font-size:12px;display:block;margin-top:4px">Pour toutes les classes en responsabilité, sur l'année en cours.</span></div>
    <div class="f6c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong>Séquences construites</strong><span style="font-size:12px;display:block;margin-top:4px">Trame, supports, activités, traces écrites.</span></div>
    <div class="f6c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong>Productions d'élèves</strong><span style="font-size:12px;display:block;margin-top:4px">Copies, comptes rendus de TP, travaux significatifs.</span></div>
    <div class="f6c bx" style="background:transparent;border:1px solid #e8820a;border-left:3px solid #e8820a;--bar:#e8820a"><strong>Évaluations &amp; résultats</strong><span style="font-size:12px;display:block;margin-top:4px">Formatives, sommatives, CCF s'il y a lieu.</span></div>
    <div class="f6c bx" style="background:transparent;border:1px solid #7a5bb5;border-left:3px solid #7a5bb5;--bar:#7a5bb5"><strong>Cahier de textes &amp; suivi</strong><span style="font-size:12px;display:block;margin-top:4px">Cahier numérique alimenté, outils de suivi élèves, PAP/PPRE, PFMP.</span></div>
    <div class="f6c bx" style="background:transparent;border:1px solid #4e7d8a;border-left:3px solid #4e7d8a;--bar:#4e7d8a"><strong>Projets &amp; formations</strong><span style="font-size:12px;display:block;margin-top:4px">Projets pédagogiques menés ; formations suivies (PAF, M@gistère).</span></div>
  </div>
  <p style="margin-top:10px">Ces documents ne sont pas exigés sous une forme normalisée ils servent de support à l'entretien.</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    Le référentiel mobilisé
  </h3>
  <p>Le cadre commun à tous les enseignants, titulaires comme contractuels, est le <strong>référentiel des compétences professionnelles des métiers du professorat et de l'éducation</strong> (arrêté du 1<sup>er</sup> juillet 2013) : 14 compétences couvrant les pratiques disciplinaires, la conduite de classe, la relation aux élèves, la coopération au sein de l'équipe et l'éthique professionnelle.</p>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Constituez <strong>dès la prise de poste</strong> un dossier, papier ou numérique, qui s'enrichit au fil de l'année : progressions, copies marquantes, photos de tableau, traces de projets. Le jour de la visite, il n'y a plus qu'à le présenter. Ce même dossier servira plus tard pour un dossier RAEP de concours interne (voir F7). L'inspecteur n'attend pas une mise en scène : une séance ordinaire de votre quotidien dit beaucoup plus de votre métier qu'une démonstration. Présentez ce que vous faites, pas ce que vous croyez qu'il faut faire.
  </div>
</div>
`},

'f7':{n:'F7',t:'Préparer un concours',s:'Voies d\'accès au CAPLP — interne, externe, 3e concours',b:`
<style>
  .f7c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
  .f7c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
  .f7c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
  .f7c:hover::before{opacity:1}
</style>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    Trois voies pour devenir titulaire
  </h3>
  <p>L'accès au CAPLP (Certificat d'Aptitude au Professorat de Lycée Professionnel) en mathématiques – physique-chimie s'organise selon trois voies, qui ciblent des publics différents.</p>
  <div class="g2">
    <div class="f7c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070">
      <strong>Concours interne</strong><br>
      <span style="font-size:12px;display:block;margin-top:4px">Pour les agents publics ayant exercé. Admissibilité : dossier RAEP. Admission : épreuve orale. <strong>Condition d'ancienneté : 3 années de services publics.</strong></span>
    </div>
    <div class="f7c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0">
      <strong>Concours externe</strong><br>
      <span style="font-size:12px;display:block;margin-top:4px">Pour les étudiants et reconversions. Épreuves écrites disciplinaires puis orales. <strong>Niveau bac+3 (licence)</strong> à partir de la session 2026.</span>
    </div>
    <div class="f7c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80">
      <strong>3<sup>e</sup> concours</strong><br>
      <span style="font-size:12px;display:block;margin-top:4px">Pour les personnes issues du secteur privé. <strong>5 années d'activité</strong> sous contrat de droit privé. Sans condition de diplôme.</span>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    Le concours interne — la voie la plus adaptée aux CTEN
  </h3>
  <p><strong>Conditions d'inscription</strong> : détenir une licence ou diplôme équivalent et justifier de <strong>3 années de services publics</strong> à la date de publication des résultats d'admissibilité.</p>
  <p><strong>Mode de calcul de l'ancienneté</strong> (spécifique au concours, distinct du calcul d'affectation) :</p>
  <ul>
    <li>décompte par année scolaire</li>
    <li>plus d'un mi-temps sur l'année = <strong>1 an</strong> comptabilisé</li>
    <li>moins d'un mi-temps = <strong>6 mois</strong></li>
    <li>une vacation de <strong>200 heures</strong> = 1 année</li>
  </ul>
  <p><strong>L'épreuve d'admissibilité,le RAEP</strong> (Reconnaissance des Acquis de l'Expérience Professionnelle) : un dossier où l'agent décrit son parcours et analyse une séquence d'enseignement représentative. C'est un exercice <strong>d'analyse réflexive</strong>, pas un mémoire académique. Le dossier constitué pour les visites d'inspection (voir F6) en fournit la matière première.</p>
  <p><strong>L'admission</strong> : une épreuve orale sur dossier disciplinaire.</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    Le concours externe — bac+3 dès 2026
  </h3>
  <p>La réforme issue du <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000051490773" target="_blank" rel="noopener" style="color:#b54070;text-decoration:underline">décret n°2025-352 du 17 avril 2025</a> abaisse le niveau de recrutement à la licence (bac+3) à compter de la session 2026, avec une période transitoire pour le concours à bac+5 sur les sessions 2026 et 2027. Pour les sections d'enseignement professionnel, des dispenses de diplôme existent : <strong>5 années de pratique professionnelle</strong> (bac+2) ou <strong>7 années</strong> (bac).</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    Dispenses de diplôme
  </h3>
  <ul>
    <li>Parent de 3 enfants</li>
    <li>Sportif de haut niveau</li>
    <li>5 années de pratique professionnelle en qualité de cadre (CAPLP)</li>
    <li>Ancien maître contractuel de l'enseignement privé admis définitivement à une échelle de rémunération</li>
  </ul>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    Calendrier-type
  </h3>
  <div class="g2" style="grid-template-columns:repeat(4,1fr);gap:8px">
    <div class="f7c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070;text-align:center"><strong style="display:block">Sept.-oct. N-1</strong><span style="font-size:11.5px">Inscriptions</span></div>
    <div class="f7c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0;text-align:center"><strong style="display:block">Mars</strong><span style="font-size:11.5px">Écrits d'admissibilité</span></div>
    <div class="f7c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80;text-align:center"><strong style="display:block">Mai-juin</strong><span style="font-size:11.5px">Oraux d'admission</span></div>
    <div class="f7c bx" style="background:transparent;border:1px solid #e8820a;border-left:3px solid #e8820a;--bar:#e8820a;text-align:center"><strong style="display:block">Été</strong><span style="font-size:11.5px">Affectation </span></div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Ressources pour préparer
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:6px">
    <a href="https://www.devenirenseignant.gouv.fr/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;background:#e8f0fa;border:1px solid #4a80c0;border-radius:999px;color:#2c5e8e;text-decoration:none;font-size:12.5px;font-weight:600;transition:background .2s ease,transform .2s ease">
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      Devenir enseignant
    </a>
    <a href="https://pedagogie.ac-lille.fr/maths-physique-chimie/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;background:#e8f0fa;border:1px solid #4a80c0;border-radius:999px;color:#2c5e8e;text-decoration:none;font-size:12.5px;font-weight:600;transition:background .2s ease,transform .2s ease">
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      MPC — Académie de Lille
    </a>
  </div>
</div>
<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Pour un CTEN expérimenté, le concours interne est presque toujours la voie la plus pertinente : il valorise ce que vous faites déjà au quotidien plutôt que des connaissances théoriques décontextualisées. Le RAEP demande du temps, comptez <strong>3 à 4 mois de rédaction sérieuse</strong>, mais s'appuie sur votre matière vivante : séquences, productions d'élèves, gestes professionnels. Si vous avez tenu un dossier depuis votre arrivée (voir F6), vous avez déjà la moitié du travail. Lisez le rapport de jury de la dernière session avant de commencer : il indique noir sur blanc ce qui est attendu et ce qui agace. Et n'attendez pas la 3<sup>e</sup> année : on peut s'inscrire dès qu'on remplit les conditions, l'expérience du concours est en soi formatrice.
  </div>
</div>
`},

'f8':{n:'F8',t:'La CDIsation',s:'Conditions, calendrier, suite',b:`
<style>
  .f8c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
  .f8c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
  .f8c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
  .f8c:hover::before{opacity:1}
</style>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12l2 2 4-4"/></svg>
    Le principe
  </h3>
<p>La CDIsation <strong>sécurise l'emploi</strong> mais ne dispense pas du concours pour devenir titulaire. Elle est encadrée par l'<a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000044426946" target="_blank" rel="noopener">article L. 332-4 du Code général de la fonction publique</a>.</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    Les deux conditions cumulatives
  </h3>
  <p>Pour bénéficier de la transformation du CDD en CDI, deux conditions doivent être <strong>simultanément</strong> remplies :</p>
  <div class="g2" style="grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
    <div class="f8c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070"><strong>6 années de services</strong><span style="font-size:12px;display:block;margin-top:4px">Continues, sans interruption supérieure à 4 mois entre deux contrats.</span></div>
    <div class="f8c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong>Même cadre d'emploi</strong><span style="font-size:12px;display:block;margin-top:4px">Auprès du même département ministériel et sur des fonctions de même catégorie hiérarchique.</span></div>
  </div>
  <p style="margin-top:10px">Le décompte se fait à la date d'échéance du contrat en cours.</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    Évolution favorable de juillet 2025
  </h3>
  <p>La <a href="https://www.conseil-constitutionnel.fr/decision/2025/20251152QPC.htm" target="_blank" rel="noopener">décision du Conseil constitutionnel n°2025-1152 QPC du 30 juillet 2025</a> a élargi les types de contrats comptabilisés. Désormais, <strong>tous les types de CDD</strong> sont pris en compte, y compris ceux conclus pour faire face à une vacance temporaire d'emploi. Applicable aux contrats signés à compter du <strong>31 juillet 2025</strong>.</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>
    Services non comptabilisés
  </h3>
  <div class="g2" style="grid-template-columns:repeat(3,1fr);gap:9px;margin-top:6px">
    <div class="f8c bx" style="background:transparent;border:1px solid #e8820a;border-left:3px solid #e8820a;--bar:#e8820a;text-align:center"><strong style="display:block;margin-bottom:3px">AED</strong><span style="font-size:11.5px">Assistant d'éducation</span></div>
    <div class="f8c bx" style="background:transparent;border:1px solid #7a5bb5;border-left:3px solid #7a5bb5;--bar:#7a5bb5;text-align:center"><strong style="display:block;margin-bottom:3px">Personnel associé</strong><span style="font-size:11.5px">Enseignant-chercheur invité ou associé</span></div>
    <div class="f8c bx" style="background:transparent;border:1px solid #4e7d8a;border-left:3px solid #4e7d8a;--bar:#4e7d8a;text-align:center"><strong style="display:block;margin-bottom:3px">Doctorat</strong><span style="font-size:11.5px">Emploi en formation doctorale</span></div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    Le mécanisme de bascule
  </h3>
  <p>Lorsque l'agent atteint les 6 ans <strong>en cours de contrat</strong>, l'employeur doit lui proposer un <strong>avenant de transformation en CDI</strong>. Cet avenant ne modifie pas par principe la quotité de temps de travail.</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
    Après la CDIsation
  </h3>
  <p><strong>La rémunération n'est pas figée :</strong></p>
  <div class="g2" style="grid-template-columns:repeat(3,1fr);gap:9px;margin-top:6px">
    <div class="f8c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong>Réévaluation</strong><span style="font-size:12px;display:block;margin-top:4px">Au moins tous les <strong>3 ans.</strong></span></div>
    <div class="f8c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070"><strong>Critères</strong><span style="font-size:12px;display:block;margin-top:4px">Valeur professionnelle et manière de servir, appréciées au cas par cas.</span></div>
    <div class="f8c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong>Pas d'automatisme</strong><span style="font-size:12px;display:block;margin-top:4px">Pas d'obligation administrative de réévaluation automatique.</span></div>
  </div>
  <p style="margin-top:10px"><strong>Plancher indiciaire</strong> des contractuels enseignants de première catégorie : indice majoré 376 (à actualiser selon la grille en vigueur).</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    Points de vigilance
  </h3>
 <div class="al rd" style="background:transparent">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
    <div>L'Éducation nationale n'a pas obligation de motiver un refus de CDIsation. Le recours possible passe par le tribunal administratif. La CDIsation ne remplace pas la titularisation seul le concours y conduit. Les contrats dans l'enseignement privé sous contrat peuvent être comptabilisés selon le type d'établissement, à vérifier au cas par cas.</div>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Conservez <strong>scrupuleusement chacun de vos contrats</strong> depuis votre tout premier jour, originaux, copies numériques, captures d'écran de notifications I-Prof si besoin. Tenez un petit tableur avec les dates de début et de fin de chaque contrat, les interruptions, l'établissement, la quotité. C'est ce document qui fera foi quand viendra le moment du décompte, et qui repérera à temps une interruption qui dépasserait les 4 mois. <strong>Six mois avant l'échéance des 6 ans</strong>, prenez rendez-vous avec votre service DPE au rectorat : ne laissez pas l'administration faire le décompte sans vous. La CDIsation et la préparation d'un concours interne (voir F7) ne sont pas exclusives un agent peut tout à fait être CDIsé et lauréat la même année.
  </div>
</div>
`},

'f9':{n:'F9',t:'Le cadre didactique des enseignements de MPC',s:'Intentions pédagogiques et compétences ciblées',b:`
<style>
.f6-obj{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0 0}
.f6-ob{border-radius:var(--r);padding:10px 13px;display:flex;align-items:flex-start;gap:9px;border:1.5px solid;transition:transform .22s cubic-bezier(.34,1.56,.64,1),box-shadow .2s}
.f6-ob:hover{transform:translateY(-3px);box-shadow:0 6px 18px rgba(0,0,0,.12)}
.f6-ob svg{width:18px;height:18px;flex-shrink:0;margin-top:1px;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}
.f6-ob-t{font-size:12.5px;font-weight:700;line-height:1.35}
.f6-ob-s{font-size:11px;margin-top:3px;line-height:1.4;opacity:.8}
.f6-ob1{background:#fce8ef;border-color:#f0b8c8;color:#6a1a30}.f6-ob1 svg{stroke:#c94060}
.f6-ob2{background:#dff0e8;border-color:#a0ddd0;color:#0a3a2a}.f6-ob2 svg{stroke:#1d9d80}
.f6-lbl{font-size:10.5px;font-weight:800;color:var(--tdark);letter-spacing:.06em;text-transform:uppercase;margin:14px 0 6px;display:flex;align-items:center;gap:6px}
.f6-lbl::after{content:'';flex:1;height:1px;background:var(--color-border-tertiary)}
.f6-cp{display:grid;grid-template-columns:repeat(5,1fr);gap:9px}
.f6-c{border-radius:var(--r);padding:16px 10px 14px;display:flex;flex-direction:column;align-items:center;gap:6px;text-align:center;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default}
.f6-c:hover{transform:translateY(-5px);box-shadow:0 12px 28px rgba(0,0,0,.22)}
.f6-cn{font-family:'Playfair Display',serif;font-size:38px;font-weight:900;color:#fff;line-height:1;font-style:italic}
.f6-ct{font-size:12px;font-weight:800;color:#fff;line-height:1.3}
.f6-cd{font-size:10.5px;color:rgba(255,255,255,.88);line-height:1.45;margin-top:2px}
.f6-c1{background:#c94060}
.f6-c2{background:#c98a30}
.f6-c3{background:#1d9d80}
.f6-c4{background:#4a90d9}
.f6-c5{background:#7a5bb5}
@media(max-width:520px){.f6-cp{grid-template-columns:repeat(3,1fr)}.f6-obj{grid-template-columns:1fr}}
</style>

<div class="s">
<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px">
<circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
</svg>
Objectifs de l'enseignement MPC en voie professionnelle
</h3>
<p>L'enseignement de mathématiques et de physique-chimie dans la voie professionnelle concourt à la formation <strong>intellectuelle, professionnelle et citoyenne</strong> des élèves.</p>
</div>

<div class="s">
<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px">
<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
</svg>
Les 5 compétences communes M et PC — BO n°5 du 11 avril 2019
</h3>
<div class="f6-cp">
<div class="f6-c f6-c1">
<span class="f6-cn">1</span>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
<span class="f6-ct">S'approprier</span>
<span class="f6-cd">Rechercher, extraire, organiser l'information</span>
</div>
<div class="f6-c f6-c2">
<span class="f6-cn">2</span>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
<span class="f6-ct">Analyser / Raisonner</span>
<span class="f6-cd">Émettre conjectures, proposer une méthode</span>
</div>
<div class="f6-c f6-c3">
<span class="f6-cn">3</span>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
<span class="f6-ct">Réaliser</span>
<span class="f6-cd">Mettre en œuvre protocole, calculer, expérimenter</span>
</div>
<div class="f6-c f6-c4">
<span class="f6-cn">4</span>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
<span class="f6-ct">Valider</span>
<span class="f6-cd">Critiquer, contrôler la vraisemblance, conclure</span>
</div>
<div class="f6-c f6-c5">
<span class="f6-cn">5</span>
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,.7)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
<span class="f6-ct">Communiquer</span>
<span class="f6-cd">Rendre compte à l'écrit et à l'oral</span>
</div>
</div>
<div class="al" style="margin-top:10px">
<svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
<line x1="12" y1="9" x2="12" y2="13"/>
<line x1="12" y1="17" x2="12.01" y2="17"/>
</svg>
<span>Les compétences sont <strong>identiques pour tous les diplômes</strong> de la voie professionnelle. Seules les <strong>capacités associées</strong> diffèrent selon le niveau de certification. → Voir fiches 36 et 38.</span>
</div>
</div>

<div class="s">
<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px">
<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
</svg>
Intentions pédagogiques des programmes
</h3>
<ul>
<li>Élargir les acquis en mathématiques et physique-chimie dans une <strong>perspective d'évolution professionnelle</strong></li>
<li>Pratiquer les <strong>démarches mathématique, scientifique et expérimentale</strong></li>
<li>Fournir des <strong>outils utiles</strong> aux enseignements généraux et professionnels</li>
<li>Assurer les <strong>bases scientifiques</strong> indispensables à la formation tout au long de la vie</li>
<li>Développer des <strong>compétences transversales</strong> : transformation digitale, enjeux énergétiques et environnementaux</li>
</ul>
</div>

<div class="al gn">
<div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
<div>
<strong>Conseil terrain</strong><br>
Ces 5 compétences sont un bon fil conducteur pour varier vos activités au fil de l'année. La <strong>démarche scientifique</strong> est souvent le cadre le plus naturel pour les articuler progressivement et les élèves perçoivent mieux le sens de ce qu'ils font quand ils comprennent sur quelle compétence ils travaillent.
</div>
</div>
`},

'f10':{n:'F10',t:'La bivalence en MPC',s:'Articulation entre mathématiques et physique-chimie',b:`
<style>
.f7-badge{display:flex;align-items:center;justify-content:center;margin:10px auto 4px;background:var(--white);border:1.5px solid var(--petal);border-radius:40px;padding:7px 16px;gap:8px}
.f7-disc{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:13px;font-weight:900;color:#fff;flex-shrink:0}
.f7-dlbl{font-size:11.5px;font-weight:700}
.f7-dm{background:#c94060}.f7-dpc{background:#2563eb}
.f7-lm{color:#c94060}.f7-lpc{color:#2563eb}
.f7-arr{font-size:18px;color:var(--smid);margin:0 10px;font-weight:900;line-height:1}
.f7-types{display:flex;flex-direction:column;gap:9px;margin:6px 0 0}
.f7-t{border-radius:var(--r);overflow:hidden;transition:transform .22s cubic-bezier(.34,1.56,.64,1),box-shadow .2s;cursor:default}
.f7-t:hover{transform:translateY(-3px);box-shadow:0 8px 22px rgba(0,0,0,.14)}
.f7-th{padding:11px 14px;display:flex;align-items:center;gap:10px}
.f7-tni{width:28px;height:28px;border-radius:50%;background:rgba(255,255,255,.22);border:1.5px solid rgba(255,255,255,.35);display:flex;align-items:center;justify-content:center;font-family:'Playfair Display',serif;font-size:13px;font-weight:700;color:#fff;flex-shrink:0}
.f7-tt{font-family:'Playfair Display',serif;font-size:12.5px;font-weight:700;color:#fff;line-height:1.3}
.f7-ts{font-size:10px;color:rgba(255,255,255,.72);margin-top:2px}
.f7-tb{padding:10px 14px 12px;font-size:12.5px;line-height:1.6}
.f7-tex{margin-top:7px;padding:8px 11px;border-radius:var(--rs);font-size:11.5px;line-height:1.55}
.f7-t1 .f7-th{background:#4a80c0}.f7-t1{border:1.5px solid #a0c0e8}
.f7-t1 .f7-tb{background:#e8f0fa;color:#1a3a5a}
.f7-t1 .f7-tex{background:var(--white);border:1px solid #a0c0e8;color:#1a3a5a}
.f7-t2 .f7-th{background:#1d9d80}.f7-t2{border:1.5px solid #a0ddd0}
.f7-t2 .f7-tb{background:#dff0e8;color:#0a3a2a}
.f7-t2 .f7-tex{background:var(--white);border:1px solid #a0ddd0;color:#0a3a2a}
.f7-t3 .f7-th{background:#7a5bb5}.f7-t3{border:1.5px solid #d6c2eb}
.f7-t3 .f7-tb{background:#eeedf8;color:#3b2680}
.f7-t3 .f7-tex{background:var(--white);border:1px solid #d6c2eb;color:#3b2680}
</style>

<div class="s">
<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px">
<path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/>
</svg>
Principe de la bivalence
</h3>
<p>La conduite de l'enseignement en MPC ne se résume pas à une juxtaposition des deux disciplines. Il est souhaitable qu'<strong>un même enseignant les prenne toutes en charge</strong> pour garantir la cohérence de la formation mathématique et scientifique des élèves.</p>
<p>La physique et la chimie utilisent des notions mathématiques pour modéliser les situations étudiées. Parallèlement, certaines notions mathématiques peuvent être introduites ou éclairées à partir de situations issues des sciences expérimentales favorisant des allers-retours constants entre abstraction et expérimentation.</p>
<div class="f7-badge">
<div class="f7-disc f7-dm">M</div>
<span class="f7-dlbl f7-lm">Mathématiques</span>
<div class="f7-arr">⟷</div>
<div class="f7-disc f7-dpc">PC</div>
<span class="f7-dlbl f7-lpc">Physique-Chimie</span>
</div>
</div>

<div class="s">
<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px">
<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
</svg>
3 exemples d'articulation envisagés
</h3>
<div class="f7-types">
<div class="f7-t f7-t1">
<div class="f7-th">
<div class="f7-tni">1</div>
<div>
<div class="f7-tt">Découverte d'une notion mathématique</div>
<div class="f7-ts">à partir d'un contexte physique ou chimique</div>
</div>
</div>
<div class="f7-tb">
Une situation concrète issue des sciences expérimentales permet d'introduire une notion mathématique.
<div class="f7-tex"><strong>Exemple :</strong> le niveau sonore <strong>L = 10 × log(I/I₀)</strong> et le pH <strong>= −log[H₃O⁺]</strong> offrent un contexte expérimental concret pour introduire la fonction logarithme décimal.</div>
</div>
</div>

<div class="f7-t f7-t2">
<div class="f7-th">
<div class="f7-tni">2</div>
<div>
<div class="f7-tt">Réinvestissement d'une connaissance mathématique</div>
<div class="f7-ts">en physique-chimie</div>
</div>
</div>
<div class="f7-tb">
Une connaissance abordée en mathématiques est réutilisée pour analyser des données expérimentales. L'élève comprend que ces outils sont nécessaires pour modéliser ou interpréter un phénomène.
<div class="f7-tex"><strong>Exemples :</strong> tracer une courbe, interpoler une valeur, estimer une moyenne (incertitudes de mesure), manipuler des grandeurs, proportionnalité.</div>
</div>
</div>

<div class="f7-t f7-t3">
<div class="f7-th">
<div class="f7-tni">3</div>
<div>
<div class="f7-tt">Approfondissement ou éclairage mutuel</div>
<div class="f7-ts">de concepts communs aux deux disciplines</div>
</div>
</div>
<div class="f7-tb">
Certaines notions présentes dans les deux disciplines sont travaillées conjointement, favorisant mémorisation et transfert de compétences.
<div class="f7-tex"><strong>Exemples :</strong> proportionnalité (concentrations en chimie, vitesses en physique), puissances de 10, variations de grandeurs, échelles, incertitudes.</div>
</div>
</div>
</div>
</div>

<div class="s">
<h3>
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px">
<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
</svg>
En voie professionnelle
</h3>
<p>Cette approche bivalente prend tout son sens en voie professionnelle, où maths et physique-chimie sont étroitement liées aux gestes techniques et aux situations d'atelier ou de stage. Calculer une intensité, comprendre un phénomène thermique, ajuster une concentration ou interpréter une mesure nécessitent de mobiliser les deux disciplines. La bivalence relie naturellement les enseignements généraux aux réalités professionnelles des élèves.</p>
</div>

<div class="al gn">
<div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
<div>
<strong>Conseil terrain</strong><br>
Un bon point de départ pour la bivalence, c'est souvent une situation tirée du secteur de vos élèves, une formule qu'ils croisent en atelier, une grandeur qu'ils mesurent en stage. Ces contextes métier sont souvent les plus parlants pour eux, et ils permettent naturellement de relier maths et physique-chimie sans que ça paraisse artificiel.
</div>
</div>
`},

'f11':{n:'F11',t:'Asseoir les savoirs fondamentaux en mathématiques',s:'Mesure 2 de la réforme — heures de soutien dédoublées',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
    L'enjeu
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    La maîtrise des savoirs fondamentaux en mathématiques est déterminante pour la réussite de l'ensemble des parcours scolaires. Les difficultés entravent les disciplines générales <em>comme</em> les enseignements professionnels. La grille horaire du Bac Pro prévoit notamment des <strong>heures de maths en groupes à effectifs réduits (Mesure 2 de la réforme)</strong> pour y répondre.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    Repérer, Accompagner, Articuler, Intervenir
  </h3>
  <style>
    .raai{border-radius:10px;cursor:default;position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s}
    .raai:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .raai::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;opacity:0;transition:opacity .2s}
    .raai:hover::before{opacity:1}
    .raai-pk::before{background:#b54070}
    .raai-gn::before{background:#2a8a4a}
    .raai-bl::before{background:#2a60a0}
    .raai-or::before{background:#c07010}
    .f8gp{border-radius:10px;cursor:default;position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;background:transparent}
    .f8gp:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f8gp::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;opacity:0;transition:opacity .2s}
    .f8gp:hover::before{opacity:1}
    .f8gp-gn::before{background:#1d9d80}
    .f8gp-bl::before{background:#4a80c0}
    .f8gp-pk::before{background:#b54070}
    .f8gp-tl::before{background:#4e7d8a}
  </style>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
    <div class="raai raai-pk bx" style="background:transparent;border:1.5px solid #d47090;padding:12px 14px">
      <div style="font-weight:800;color:#b54070;font-size:13px;margin-bottom:6px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> Repérer</div>
      <p style="font-size:12.5px;color:#333;line-height:1.55;margin:0">Les élèves en difficultés en français et en mathématiques pour lesquels un accompagnement spécifique est indispensable.</p>
    </div>
    <div class="raai raai-gn bx" style="background:transparent;border:1.5px solid #3aaa5a;padding:12px 14px">
      <div style="font-weight:800;color:#2a8a4a;font-size:13px;margin-bottom:6px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 11H9l-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3l2 2h6l2-2h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1"/><path d="M9 11V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/></svg> Accompagner</div>
      <p style="font-size:12.5px;color:#333;line-height:1.55;margin:0">Travailler les notions inscrites au programme de façon différente, notamment par la mise en activité de l'élève et l'usage d'outils numériques.</p>
    </div>
    <div class="raai raai-bl bx" style="background:transparent;border:1.5px solid #4a80c0;padding:12px 14px">
      <div style="font-weight:800;color:#2a60a0;font-size:13px;margin-bottom:6px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg> Articuler</div>
      <p style="font-size:12.5px;color:#333;line-height:1.55;margin:0">Cours de maths et français en groupes à effectifs réduits pour une partie de l'horaire annuel. Groupes évolutifs au cours de l'année.</p>
    </div>
    <div class="raai raai-or bx" style="background:transparent;border:1.5px solid #e8a820;padding:12px 14px">
      <div style="font-weight:800;color:#c07010;font-size:13px;margin-bottom:6px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> Intervenir</div>
      <p style="font-size:12.5px;color:#333;line-height:1.55;margin:0">Intervention en face-à-face pédagogique et auprès de groupes à effectifs réduits, en lien avec l'ensemble des dispositifs de remédiation existants.</p>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    La mise en place des groupes à effectifs réduits
  </h3>
  <div class="g2">
    <div class="f8gp f8gp-pk bx" style="background:transparent;border:1.5px solid #d47090;padding:12px 14px"><strong>Dissymétrie possible</strong><br><span style="font-size:12px">Les groupes peuvent être très inégaux en taille selon les besoins identifiés.</span></div>
    <div class="f8gp f8gp-gn bx" style="background:transparent;border:1.5px solid #3aaa5a;padding:12px 14px"><strong>Groupes évolutifs</strong><br><span style="font-size:12px">Évoluent tout au long de l'année en fonction des contenus, de l'évaluation des acquis et des besoins de chacun.</span></div>
    <div class="f8gp f8gp-bl bx" style="background:transparent;border:1.5px solid #4a80c0;padding:12px 14px"><strong>Différenciation pédagogique</strong><br><span style="font-size:12px">Mise en place d'une différenciation pédagogique répondant aux besoins individuels de chaque élève.</span></div>
    <div class="f8gp f8gp-tl bx" style="background:transparent;border:1.5px solid #4e7d8a;padding:12px 14px"><strong>Tests de positionnement</strong><br><span style="font-size:12px">Associés au suivi de l'évolution des acquis et pris en compte dans la composition et l'évolution des groupes.</span></div>
  </div>
  </div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Profitez des premières séances en groupe réduit pour observer les stratégies de calcul des élèves, repérer certains blocages ou malentendus conceptuels : ces petits indices du quotidien sont souvent très précieux pour ajuster progressivement votre enseignement. Il peut aussi être utile de garder à l'esprit que la composition des groupes gagne souvent à rester souple et évolutive, afin que chaque élève puisse trouver sa place sereinement sans se sentir stigmatisé.
  </div>
</div>
`},

'f12':{n:'F12',t:'La maîtrise de la langue française (MDL)',s:'Stratégies pour favoriser l\'expression écrite et orale',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
    La langue : un enjeu transversal en MPC
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Faire progresser les élèves dans leur maîtrise de la langue française est l'affaire de tous les enseignements. La langue n'est pas seulement un outil de communication : c'est un levier pour structurer la pensée, raisonner et argumenter. En MPC, les élèves ont besoin de comprendre les consignes, de s'approprier progressivement un vocabulaire scientifique précis et d'apprendre à formuler un raisonnement rigoureux.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    Les obstacles fréquents à lever
  </h3>
  <style>
    .f12c{border-radius:10px;cursor:default;position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;background:transparent}
    .f12c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f12c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;opacity:0;transition:opacity .2s}
    .f12c:hover::before{opacity:1}
    .f12c-bl::before{background:#4a80c0}
    .f12c-or::before{background:#e8820a}
    .f12c-gn::before{background:#2aaa8a}
    .f12c-vl::before{background:#7a50b8}
  </style>
  <div class="g2">
    <div class="f12c f12c-bl bx" style="background:transparent;border:1.5px solid #4a80c0"><strong>Polysémie scientifique</strong><br><span style="font-size:12px">Des mots courants ont un sens précis en sciences : <em>solution</em>, <em>tension</em>, <em>moyenne</em>, <em>puissance</em>… À expliciter systématiquement.</span></div>
    <div class="f12c f12c-or bx" style="background:transparent;border:1.5px solid #e8820a"><strong>Consignes mal comprises</strong><br><span style="font-size:12px">Les verbes d'action (<em>justifier</em>, <em>interpréter</em>, <em>modéliser</em>) sont souvent mal identifiés. Un lexique affiché aide.</span></div>
    <div class="f12c f12c-gn bx" style="background:transparent;border:1.5px solid #2aaa8a"><strong>Inférences implicites</strong><br><span style="font-size:12px">Les énoncés supposent parfois des connaissances culturelles ou contextuelles que les élèves n'ont pas forcément.</span></div>
    <div class="f12c f12c-vl bx" style="background:transparent;border:1.5px solid #7a50b8"><strong>Oral peu pratiqué</strong><br><span style="font-size:12px">Beaucoup d'élèves n'ont pas l'habitude de verbaliser un raisonnement scientifique. Créer des occasions régulières est indispensable.</span></div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
    Oral et Écrit en MPC : activités clés
  </h3>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 680 310" style="overflow:visible;display:block;margin:8px 0" role="img">
    <title>Oral et Écrit scientifique en MPC — activités clés</title>
    <style>
      .mdl-col:hover rect.mdl-bg { filter:brightness(1.06); }
      .mdl-item { font-family:'Nunito',sans-serif; font-size:11px; fill:#2c1a28; }
      .mdl-hd { font-family:'Playfair Display',serif; font-size:13px; font-weight:700; }
    </style>
    <rect x="10" y="0" width="315" height="44" rx="10" fill="#b54070"/>
    <text x="167" y="26" text-anchor="middle" font-family="Nunito,sans-serif" font-size="13" font-weight="700" fill="#fff">Développer l'oral scientifique</text>
    <text x="167" y="38" text-anchor="middle" font-family="Nunito,sans-serif" font-size="10" fill="rgba(255,255,255,.8)">6 modalités à varier</text>
    <rect x="10" y="50" width="315" height="250" rx="10" fill="#fce8f2" stroke="#d4789a" stroke-width="1"/>
    <rect x="22" y="62" width="291" height="34" rx="7" fill="#fff" stroke="#f0b8c8" stroke-width="1"/>
    <text x="36" y="77" class="mdl-item" font-weight="800" fill="#b54070">Lecture à voix haute</text>
    <text x="36" y="90" class="mdl-item">Clarifier une consigne · Préparer en binôme</text>
    <rect x="22" y="102" width="291" height="34" rx="7" fill="#fff" stroke="#f0b8c8" stroke-width="1"/>
    <text x="36" y="117" class="mdl-item" font-weight="800" fill="#b54070">Feedback (5 min)</text>
    <text x="36" y="130" class="mdl-item">Résumer la séance précédente · 1 élève, oral libre</text>
    <rect x="22" y="142" width="291" height="34" rx="7" fill="#fff" stroke="#f0b8c8" stroke-width="1"/>
    <text x="36" y="157" class="mdl-item" font-weight="800" fill="#b54070">Exposé scientifique</text>
    <text x="36" y="170" class="mdl-item">Structurer un discours · Avec ou sans support</text>
    <rect x="22" y="182" width="291" height="34" rx="7" fill="#fff" stroke="#f0b8c8" stroke-width="1"/>
    <text x="36" y="197" class="mdl-item" font-weight="800" fill="#b54070">Débat scientifique</text>
    <text x="36" y="210" class="mdl-item">Argumenter · Rôles distribués, durée cadrée</text>
    <rect x="22" y="222" width="291" height="34" rx="7" fill="#fff" stroke="#f0b8c8" stroke-width="1"/>
    <text x="36" y="237" class="mdl-item" font-weight="800" fill="#b54070">Diaporama commenté</text>
    <text x="36" y="250" class="mdl-item">Restituer un TP · Format libre ou imposé</text>
    <rect x="22" y="262" width="291" height="28" rx="7" fill="#fff" stroke="#f0b8c8" stroke-width="1"/>
    <text x="36" y="277" class="mdl-item" font-weight="800" fill="#b54070">Tutos entre pairs</text>
    <text x="157" y="277" class="mdl-item">· Audio/vidéo, en autonomie</text>
    <rect x="355" y="0" width="315" height="44" rx="10" fill="#1d9d80"/>
    <text x="512" y="26" text-anchor="middle" font-family="Nunito,sans-serif" font-size="13" font-weight="700" fill="#fff">Travailler l'écrit disciplinaire</text>
    <text x="512" y="38" text-anchor="middle" font-family="Nunito,sans-serif" font-size="10" fill="rgba(255,255,255,.8)">5 situations d'entraînement</text>
    <rect x="355" y="50" width="315" height="250" rx="10" fill="#dff0e8" stroke="#a0ddd0" stroke-width="1"/>
    <rect x="367" y="62" width="291" height="34" rx="7" fill="#fff" stroke="#a0ddd0" stroke-width="1"/>
    <text x="381" y="77" class="mdl-item" font-weight="800" fill="#1d9d80">Rédiger une conclusion de TP</text>
    <text x="381" y="90" class="mdl-item">Vocabulaire précis · Liste de connecteurs logiques</text>
    <rect x="367" y="102" width="291" height="34" rx="7" fill="#fff" stroke="#a0ddd0" stroke-width="1"/>
    <text x="381" y="117" class="mdl-item" font-weight="800" fill="#1d9d80">Compléter un schéma / tableau</text>
    <text x="381" y="130" class="mdl-item">Relier symboles et langage · Version codée couleur</text>
    <rect x="367" y="142" width="291" height="34" rx="7" fill="#fff" stroke="#a0ddd0" stroke-width="1"/>
    <text x="381" y="157" class="mdl-item" font-weight="800" fill="#1d9d80">Justifier une réponse</text>
    <text x="381" y="170" class="mdl-item">Organiser un raisonnement · Fiche méthode dédiée</text>
    <rect x="367" y="182" width="291" height="34" rx="7" fill="#fff" stroke="#a0ddd0" stroke-width="1"/>
    <text x="381" y="197" class="mdl-item" font-weight="800" fill="#1d9d80">Lire une consigne complexe</text>
    <text x="381" y="210" class="mdl-item">Identifier le verbe d'action · Tableau des verbes</text>
    <rect x="367" y="222" width="291" height="68" rx="7" fill="#fff" stroke="#a0ddd0" stroke-width="1"/>
    <text x="381" y="237" class="mdl-item" font-weight="800" fill="#1d9d80">Rédiger la trace écrite</text>
    <text x="381" y="250" class="mdl-item">Vocabulaire scientifique précis</text>
    <text x="381" y="264" class="mdl-item" fill="#5a8070" font-style="italic">→ Faire émerger les notions par questionnement</text>
    <text x="381" y="278" class="mdl-item" fill="#5a8070" font-style="italic">→ Co-construction avec les élèves</text>
    <text x="340" y="158" text-anchor="middle" font-size="20" fill="#c94060">⇄</text>
    <text x="340" y="173" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9" fill="#9b6a7e">croiser</text>
  </svg>
  <p style="font-size:12.5px;color:var(--tmid);margin-top:4px">Oraliser un raisonnement <em>avant</em> de le rédiger, ou écrire pour préparer un oral : des allers-retours qui renforcent la compréhension.</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="M3 9h6"/><path d="M3 15h6"/></svg>
    Expliciter les verbes de consigne
  </h3>
  <p>Des verbes comme <em>justifier</em>, <em>interpréter</em>, <em>caractériser</em>, <em>modéliser</em> sont souvent mal compris. Proposer aux élèves un <strong>lexique des verbes usuels</strong> à afficher ou insérer dans le cahier.</p>
  <div class="g2">
    <div class="f12c f12c-bl bx" style="background:transparent;border:1.5px solid #4a80c0"><strong>Comparer</strong><br><span style="font-size:12px">Mettre en évidence des différences ou ressemblances entre deux éléments.</span></div>
    <div class="f12c f12c-or bx" style="background:transparent;border:1.5px solid #e8820a"><strong>Interpréter</strong><br><span style="font-size:12px">Proposer une explication à partir des données disponibles.</span></div>
    <div class="f12c f12c-gn bx" style="background:transparent;border:1.5px solid #2aaa8a"><strong>Justifier</strong><br><span style="font-size:12px">Appuyer une réponse avec un raisonnement ou une donnée du cours.</span></div>
    <div class="f12c f12c-vl bx" style="background:transparent;border:1.5px solid #7a50b8"><strong>Modéliser</strong><br><span style="font-size:12px">Représenter une situation réelle par un objet mathématique ou physique.</span></div>
  </div>
  <div class="al yw" style="margin-top:10px">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg></div>
    <div>Référentiel des verbes d'action proposé par le <strong>GRIESP</strong> — à télécharger sur Éduscol (voir liens ci-dessous).</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    Place de la trace écrite — décontextualiser pour ancrer
  </h3>
  <div style="display:flex;align-items:stretch;gap:0;margin:10px 0 14px;border-radius:10px;overflow:hidden;border:1.5px solid #d4789a">
    <div style="flex:1;background:#fce8f2;padding:12px 14px">
      <div style="font-size:11px;font-weight:800;color:#7a1f45;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">Activité contextualisée</div>
      <div style="font-size:12.5px;color:#2c1a28;line-height:1.5">Situation issue du domaine professionnel, d'une autre discipline ou de la vie courante.</div>
    </div>
    <div style="width:2px;background:#d4789a;flex-shrink:0"></div>
    <div style="flex:1;background:linear-gradient(135deg,#7a1f45,#b54070);padding:12px 14px;display:flex;align-items:center;justify-content:center">
      <div style="text-align:center">
        <div><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg></div>
        <div style="font-size:12px;font-weight:800;color:#fff;margin-top:4px">Décontextualisation</div>
      </div>
    </div>
    <div style="width:2px;background:#d4789a;flex-shrink:0"></div>
    <div style="flex:1;background:#edf7f0;padding:12px 14px">
      <div style="font-size:11px;font-weight:800;color:#1d6b48;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">Trace écrite</div>
      <div style="font-size:12.5px;color:#2c1a28;line-height:1.5">Synthèse <strong>courte, fonctionnelle</strong>, co-construite avec les élèves. Modèles et lois réutilisables dans d'autres contextes.</div>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Pour aller plus loin
  </h3>
  <div style="display:flex;flex-wrap:nowrap;gap:8px;margin-top:4px">
    <a href="https://eduscol.education.fr/document/15967/download" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      GRIESP · Oral (débat &amp; tutoriels)
    </a>
    <a href="https://eduscol.education.fr/document/15940/download" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      GRIESP · Oral (activités)
    </a>
    <a href="https://eduscol.education.fr/document/15904/download" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      GRIESP · Oral (fiches)
    </a>
  </div>
  <p style="margin-top:8px;font-size:13px;color:var(--tmid)">Cahiers pédagogiques n°553 – <em>Pédagogie de l'oral</em> · Test de positionnement oral – Seconde (Éduscol)</p>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Le travail autour de la langue peut facilement trouver sa place dans les activités de MPC du quotidien. Faire reformuler un résultat à l'oral avant de le noter, encourager l'utilisation de mots de liaison dans une conclusion de TP, afficher quelques verbes de consigne en début d'année. Ce sont souvent ces petits rituels simples et répétés qui permettent les progrès les plus visibles.
  </div>
</div>
`},

'f13':{n:'F13',t:'Diversité des activités d\'apprentissage',s:'Résolution de problèmes, TP, numérique, automatismes',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    Principe — Varier pour mieux faire apprendre
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    La diversité des activités proposées permet aux élèves de <strong>mettre en œuvre la démarche scientifique et la démarche mathématique dans toute leur variété</strong> : chercher, manipuler, automatiser, coopérer, restituer. Le travail de groupe développe l'ouverture aux autres, la confiance et l'entraide, des compétences essentielles dans le monde du travail.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    Les 6 temps de l'apprentissage à équilibrer
  </h3>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 680 262" style="overflow:visible;display:block;margin:8px 0" role="img">
    <title>Les 6 temps de l'apprentissage en MPC à équilibrer</title>
    <style>
      .tps { transition: transform .26s cubic-bezier(.34,1.56,.64,1), filter .22s ease; transform-box: fill-box; transform-origin: center; cursor: default; }
      .tps:hover { transform: translateY(-5px); filter: drop-shadow(0 8px 18px rgba(0,0,0,.22)); }
      .tt { font-family:'Nunito',sans-serif; font-size:10.5px; }
      .tg { font-family:'Nunito',sans-serif; font-size:9.5px; font-weight:700; }
      .th { font-family:'Nunito',sans-serif; font-size:12px; font-weight:700; }
    </style>
    <g class="tps">
      <rect x="5" y="10" width="205" height="118" rx="10" fill="#fce8f2" stroke="#d4789a" stroke-width="1.2"/>
      <rect x="5" y="10" width="205" height="30" rx="10" fill="#b54070"/>
      <rect x="5" y="30" width="205" height="10" fill="#b54070"/>
      <text x="107" y="30" text-anchor="middle" class="th" fill="#fff">Recherche et manipulation</text>
      <text x="17" y="56" class="tt" fill="#5a1a30">Activités pratiques, expériences,</text>
      <text x="17" y="71" class="tt" fill="#5a1a30">investigations, résolution de</text>
      <text x="17" y="86" class="tt" fill="#5a1a30">problèmes en autonomie.</text>
      <line x1="17" y1="98" x2="200" y2="98" stroke="#d4789a" stroke-width="0.7" opacity="0.5"/>
      <text x="17" y="108" class="tg" fill="#b54070">→ Initiative · Prise de risque</text>
      <text x="17" y="120" class="tg" fill="#b54070">· Erreur positive</text>
    </g>
    <g class="tps">
      <rect x="238" y="10" width="204" height="118" rx="10" fill="#e8f0fa" stroke="#a0c0e8" stroke-width="1.2"/>
      <rect x="238" y="10" width="204" height="30" rx="10" fill="#4a80c0"/>
      <rect x="238" y="30" width="204" height="10" fill="#4a80c0"/>
      <text x="340" y="30" text-anchor="middle" class="th" fill="#fff">Dialogue et échange</text>
      <text x="250" y="56" class="tt" fill="#1a3a5a">Verbalisation, débats, mise en</text>
      <text x="250" y="71" class="tt" fill="#1a3a5a">commun, correction collective,</text>
      <text x="250" y="86" class="tt" fill="#1a3a5a">oral scientifique.</text>
      <line x1="250" y1="98" x2="432" y2="98" stroke="#a0c0e8" stroke-width="0.7" opacity="0.5"/>
      <text x="250" y="112" class="tg" fill="#4a80c0">→ Langage · Argumentation · Écoute active</text>
    </g>
    <g class="tps">
      <rect x="471" y="10" width="204" height="118" rx="10" fill="#dff0e8" stroke="#a0ddd0" stroke-width="1.2"/>
      <rect x="471" y="10" width="204" height="30" rx="10" fill="#1d9d80"/>
      <rect x="471" y="30" width="204" height="10" fill="#1d9d80"/>
      <text x="573" y="30" text-anchor="middle" class="th" fill="#fff">Synthèse et abstraction</text>
      <text x="483" y="56" class="tt" fill="#0a3a2a">Décontextualisation, trace écrite,</text>
      <text x="483" y="71" class="tt" fill="#0a3a2a">modèles et lois réutilisables</text>
      <text x="483" y="86" class="tt" fill="#0a3a2a">dans de nouveaux contextes.</text>
      <line x1="483" y1="98" x2="665" y2="98" stroke="#a0ddd0" stroke-width="0.7" opacity="0.5"/>
      <text x="483" y="112" class="tg" fill="#1d9d80">→ Structuration · Mémorisation · Transfert</text>
    </g>
    <g class="tps">
      <rect x="5" y="142" width="205" height="112" rx="10" fill="#ede4f7" stroke="#c4a8ea" stroke-width="1.2"/>
      <rect x="5" y="142" width="205" height="30" rx="10" fill="#7a5bb5"/>
      <rect x="5" y="162" width="205" height="10" fill="#7a5bb5"/>
      <text x="107" y="162" text-anchor="middle" class="th" fill="#fff">Exercices et problèmes</text>
      <text x="17" y="188" class="tt" fill="#3a1a6a">Entraînement varié, situations</text>
      <text x="17" y="203" class="tt" fill="#3a1a6a">contextualisées, travaux</text>
      <text x="17" y="218" class="tt" fill="#3a1a6a">hors temps scolaire (courts).</text>
      <line x1="17" y1="228" x2="200" y2="228" stroke="#c4a8ea" stroke-width="0.7" opacity="0.5"/>
      <text x="17" y="242" class="tg" fill="#7a5bb5">→ Autonomie · Préparation au supérieur</text>
    </g>
    <g class="tps">
      <rect x="238" y="142" width="204" height="112" rx="10" fill="#e8f5e9" stroke="#90d4a0" stroke-width="1.2"/>
      <rect x="238" y="142" width="204" height="30" rx="10" fill="#2a8a4a"/>
      <rect x="238" y="162" width="204" height="10" fill="#2a8a4a"/>
      <text x="340" y="162" text-anchor="middle" class="th" fill="#fff">Rituels et automatismes</text>
      <text x="250" y="188" class="tt" fill="#0a3a18">5 min en début/fin de séance :</text>
      <text x="250" y="203" class="tt" fill="#0a3a18">calcul mental, QCM, grandeurs,</text>
      <text x="250" y="218" class="tt" fill="#0a3a18">géométrie, ordres de grandeur.</text>
      <line x1="250" y1="228" x2="432" y2="228" stroke="#90d4a0" stroke-width="0.7" opacity="0.5"/>
      <text x="250" y="242" class="tg" fill="#2a8a4a">→ Confiance · Maîtrise · Esprit critique</text>
    </g>
    <g class="tps">
      <rect x="471" y="142" width="204" height="112" rx="10" fill="#fff3e0" stroke="#ffb870" stroke-width="1.2"/>
      <rect x="471" y="142" width="204" height="30" rx="10" fill="#d46030"/>
      <rect x="471" y="162" width="204" height="10" fill="#d46030"/>
      <text x="573" y="162" text-anchor="middle" class="th" fill="#fff">Analyse des erreurs</text>
      <text x="483" y="188" class="tt" fill="#5a2a08">Identifier, comprendre et</text>
      <text x="483" y="203" class="tt" fill="#5a2a08">dépasser ses erreurs avec</text>
      <text x="483" y="218" class="tt" fill="#5a2a08">l'aide du professeur ou du groupe.</text>
      <line x1="483" y1="228" x2="665" y2="228" stroke="#ffb870" stroke-width="0.7" opacity="0.5"/>
      <text x="483" y="242" class="tg" fill="#d46030">→ Confiance en soi · Apprentissage positif</text>
    </g>
  </svg>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
    La résolution de problèmes — chercher, se tromper, apprendre
  </h3>
  <p>Les activités de type « résolution de problème », individuelles ou en groupe, exigent <strong>initiative et autonomie</strong> de la part de l'élève. Il cherche, teste, valide, prend le risque de se tromper. Ce travail positif sur l'erreur, guidé par l'enseignant, participe à la <strong>construction des apprentissages et au développement de la confiance en soi</strong>.</p>
  <style>
    .f13c{border-radius:10px;cursor:default;position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;background:transparent}
    .f13c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f13c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;opacity:0;transition:opacity .2s}
    .f13c:hover::before{opacity:1}
    .f13c-gn::before{background:#2aaa8a}
    .f13c-or::before{background:#e8820a}
    .f13c-bl::before{background:#4a80c0}
    .f13c-vl::before{background:#7a50b8}
  </style>
  <div class="g2">
    <div class="f13c f13c-gn bx" style="background:transparent;border:1.5px solid #2aaa8a"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Favoriser</strong><br><span style="font-size:12px">Problèmes ouverts, données incomplètes, entrées multiples, situations issues du secteur professionnel de l'élève.</span></div>
    <div class="f13c f13c-or bx" style="background:transparent;border:1.5px solid #e8820a"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Éviter</strong><br><span style="font-size:12px">Enchaîner uniquement des exercices d'application directe sans phase de recherche ni de questionnement.</span></div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    Le travail expérimental et numérique
  </h3>
  <p>Le travail expérimental peut résulter de manipulations pratiques <strong>avec ou sans outils numériques</strong>. Calculatrices, tableurs, simulateurs et logiciels de programmation fournissent de nombreuses occasions d'expérimenter, d'émettre des conjectures et de traiter des données statistiques.</p>
  <div class="g2">
    <div class="f13c f13c-bl bx" style="background:transparent;border:1.5px solid #4a80c0"><strong>Par l'enseignant</strong><br><span style="font-size:12px">Visualisation collective via vidéoprojecteur, démonstration, mise en commun des résultats.</span></div>
    <div class="f13c f13c-vl bx" style="background:transparent;border:1.5px solid #7a50b8"><strong>Par les élèves</strong><br><span style="font-size:12px">TP numériques en classe, travail personnel dans et/ou hors la classe (CDI, maison), séances d'évaluation.</span></div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    La place de l'erreur dans les apprentissages
  </h3>
  <p>L'erreur n'est pas l'opposé de l'apprentissage, elle en fait partie. Faire des erreurs, c'est précisément le signe qu'un élève cherche, ajuste, construit. La distinguer de la faute (qui suppose intention ou négligence) change la posture en classe : l'erreur devient une information sur la pensée de l'élève, pas un échec à sanctionner.</p>
  <p>Concrètement, l'enseignant peut accueillir l'erreur sans la stigmatiser, en l'utilisant comme matière pour la classe : la rendre visible au tableau, demander à l'élève d'expliciter son raisonnement, faire comparer plusieurs procédures. C'est aussi une condition du climat de sécurité psychologique qui permet aux élèves de prendre des risques cognitifs, donc d'apprendre. Le « droit à l'erreur » ne se décrète pas, il s'installe par la régularité de ces gestes.</p>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">
    <a href="https://podeduc.apps.education.fr/video/103491-lerreur-de-la-faute-au-levier-dapprentissage/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;background:#e8f0fa;border:1px solid #4a80c0;border-radius:999px;color:#2c5e8e;text-decoration:none;font-size:12.5px;font-weight:600;transition:background .2s ease,transform .2s ease">
      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
      PodEduc — L'erreur, de la faute au levier d'apprentissage
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    De petits rituels de quelques minutes en ouverture ou en fin de séance peuvent aider à installer un cadre rassurant : calcul mental, question flash, petit QCM rapide… Les élèves apprécient souvent cette régularité qui facilite l'entrée dans le travail. Il peut aussi être intéressant de <strong>varier les formats au fil de la semaine</strong> (manipulation, résolution de problème, temps de synthèse) afin de rythmer les séances et maintenir l'engagement des élèves.
  </div>
</div>
`},

'f14':{n:'F14',t:'Sécurité et protocoles en laboratoire',s:'Règles systématiques — La sécurité, une compétence à construire',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    Contexte pédagogique
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    La physique-chimie en lycée professionnel implique souvent des manipulations. L'objectif est de former les élèves à <strong>réfléchir avant d'agir</strong>, à comprendre les gestes qui protègent, et à adopter des comportements responsables en classe comme dans leur futur métier. La sécurité n'est pas une contrainte : c'est un <strong>levier pédagogique</strong> à part entière.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    Les 5 règles systématiques en TP
  </h3>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 680 158" style="overflow:visible;display:block;margin:8px 0" role="img">
    <title>Les 5 règles systématiques de sécurité en TP</title>
    <style>
      .rgl { transition: transform .26s cubic-bezier(.34,1.56,.64,1), filter .22s ease; transform-box: fill-box; transform-origin: center; cursor: default; }
      .rgl:hover { transform: translateY(-5px); filter: drop-shadow(0 8px 18px rgba(0,0,0,.22)); }
      .rl { font-family:'Nunito',sans-serif; font-size:10px; fill:#2c1a28; text-anchor:middle; }
      .rb { font-family:'Nunito',sans-serif; font-size:11.5px; font-weight:700; text-anchor:middle; }
    </style>
    <g class="rgl">
      <rect x="4" y="8" width="124" height="142" rx="12" fill="#fce8f2" stroke="#d4789a" stroke-width="1.2"/>
      <rect x="4" y="8" width="124" height="36" rx="12" fill="#b54070"/>
      <rect x="4" y="32" width="124" height="12" fill="#b54070"/>
      <text x="66" y="30" class="rb" fill="#fff">EPI</text>
      <text x="66" y="62" class="rl">Blouse coton,</text>
      <text x="66" y="76" class="rl">lunettes de protection,</text>
      <text x="66" y="90" class="rl">gants ou masque</text>
      <text x="66" y="104" class="rl">si nécessaire.</text>
      <line x1="16" y1="116" x2="116" y2="116" stroke="#d4789a" stroke-width="0.6" opacity="0.6"/>
      <text x="66" y="130" class="rl" font-weight="700" fill="#b54070">→ À mettre avant</text>
      <text x="66" y="143" class="rl" font-weight="700" fill="#b54070">toute manipulation</text>
    </g>
    <g class="rgl">
      <rect x="136" y="8" width="124" height="142" rx="12" fill="#e8f0fa" stroke="#a0c0e8" stroke-width="1.2"/>
      <rect x="136" y="8" width="124" height="36" rx="12" fill="#4a80c0"/>
      <rect x="136" y="32" width="124" height="12" fill="#4a80c0"/>
      <text x="198" y="30" class="rb" fill="#fff">Poste de travail</text>
      <text x="198" y="62" class="rl" fill="#1a3a5a">Paillasse dégagée,</text>
      <text x="198" y="76" class="rl" fill="#1a3a5a">cheveux attachés,</text>
      <text x="198" y="90" class="rl" fill="#1a3a5a">sacs rangés, travail</text>
      <text x="198" y="104" class="rl" fill="#1a3a5a">debout, sans boisson.</text>
      <line x1="148" y1="116" x2="248" y2="116" stroke="#a0c0e8" stroke-width="0.6" opacity="0.6"/>
      <text x="198" y="130" class="rl" font-weight="700" fill="#4a80c0">→ Organisation</text>
      <text x="198" y="143" class="rl" font-weight="700" fill="#4a80c0">avant de commencer</text>
    </g>
    <g class="rgl">
      <rect x="268" y="8" width="124" height="142" rx="12" fill="#dff0e8" stroke="#a0ddd0" stroke-width="1.2"/>
      <rect x="268" y="8" width="124" height="36" rx="12" fill="#1d9d80"/>
      <rect x="268" y="32" width="124" height="12" fill="#1d9d80"/>
      <text x="330" y="30" class="rb" fill="#fff">Protocole</text>
      <text x="330" y="62" class="rl">Ne jamais improviser.</text>
      <text x="330" y="76" class="rl">Aucune manipulation</text>
      <text x="330" y="90" class="rl">sans autorisation</text>
      <text x="330" y="104" class="rl">explicite.</text>
      <line x1="280" y1="116" x2="380" y2="116" stroke="#a0ddd0" stroke-width="0.6" opacity="0.6"/>
      <text x="330" y="130" class="rl" font-weight="700" fill="#1d9d80">→ Réfléchir</text>
      <text x="330" y="143" class="rl" font-weight="700" fill="#1d9d80">avant d'agir</text>
    </g>
    <g class="rgl">
      <rect x="400" y="8" width="124" height="142" rx="12" fill="#ede4f7" stroke="#c4a8ea" stroke-width="1.2"/>
      <rect x="400" y="8" width="124" height="36" rx="12" fill="#7a5bb5"/>
      <rect x="400" y="32" width="124" height="12" fill="#7a5bb5"/>
      <text x="462" y="30" class="rb" fill="#fff">Hygiène</text>
      <text x="462" y="62" class="rl">Lavage des mains</text>
      <text x="462" y="76" class="rl">après la séance,</text>
      <text x="462" y="90" class="rl">nettoyage matériel</text>
      <text x="462" y="104" class="rl">et plan de travail.</text>
      <line x1="412" y1="116" x2="512" y2="116" stroke="#c4a8ea" stroke-width="0.6" opacity="0.6"/>
      <text x="462" y="130" class="rl" font-weight="700" fill="#7a5bb5">→ Rangement</text>
      <text x="462" y="143" class="rl" font-weight="700" fill="#7a5bb5">systématique</text>
    </g>
    <g class="rgl">
      <rect x="532" y="8" width="144" height="142" rx="12" fill="#fff3e0" stroke="#ffb870" stroke-width="1.2"/>
      <rect x="532" y="8" width="144" height="36" rx="12" fill="#d46030"/>
      <rect x="532" y="32" width="144" height="12" fill="#d46030"/>
      <text x="604" y="30" class="rb" fill="#fff">Eval. des risques</text>
      <text x="604" y="62" class="rl">Avant chaque séance,</text>
      <text x="604" y="76" class="rl">identifier les dangers</text>
      <text x="604" y="90" class="rl">et décider si les EPI</text>
      <text x="604" y="104" class="rl">sont nécessaires.</text>
      <line x1="544" y1="116" x2="664" y2="116" stroke="#ffb870" stroke-width="0.6" opacity="0.6"/>
      <text x="604" y="130" class="rl" font-weight="700" fill="#d46030">→ Esprit critique</text>
      <text x="604" y="143" class="rl" font-weight="700" fill="#d46030">et responsabilité</text>
    </g>
  </svg>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    Avant — Pendant — Après : structurer la séance expérimentale
  </h3>
  <div style="display:flex;align-items:stretch;gap:0;margin:10px 0 14px;border-radius:10px;overflow:hidden;border:1.5px solid #d4789a">
    <div style="flex:1;background:#fce8f2;padding:12px 14px">
      <div style="font-size:11px;font-weight:800;color:#7a1f45;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">⏮ Avant</div>
      <div style="font-size:12.5px;color:#2c1a28;line-height:1.6">Lire le protocole ensemble.<br>Identifier les <strong>risques spécifiques</strong>.<br>Vérifier les EPI nécessaires.<br>Présenter le matériel.</div>
    </div>
    <div style="width:2px;background:#d4789a;flex-shrink:0"></div>
    <div style="flex:1;background:linear-gradient(135deg,#7a1f45,#b54070);padding:12px 14px;display:flex;align-items:center;justify-content:center">
      <div style="text-align:center">
        <div><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6l2-2 2 2v4a2 2 0 0 1-2 2z"/></svg></div>
        <div style="font-size:13px;font-weight:800;color:#fff;margin-top:4px">Manipulation</div>
        <div style="font-size:10.5px;color:rgba(255,255,255,.78);margin-top:2px">Gestes guidés<br>Observation active</div>
      </div>
    </div>
    <div style="width:2px;background:#d4789a;flex-shrink:0"></div>
    <div style="flex:1;background:#edf7f0;padding:12px 14px">
      <div style="font-size:11px;font-weight:800;color:#1d6b48;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px">⏭ Après</div>
      <div style="font-size:12.5px;color:#2c1a28;line-height:1.6">Nettoyage et rangement.<br>Lavage des mains.<br><strong>Bilan collectif</strong> : qu'est-ce qui a bien/mal fonctionné ?<br>Consigner si incident.</div>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    Le cadre de sécurité dans l'établissement
  </h3>
  <style>
    .f14c{border-radius:10px;cursor:default;position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;background:transparent}
    .f14c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f14c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;opacity:0;transition:opacity .2s}
    .f14c:hover::before{opacity:1}
    .f14c-bl::before{background:#4a80c0}
    .f14c-gn::before{background:#2aaa8a}
    .f14c-g2::before{background:#3aaa5a}
    .f14c-or::before{background:#e8820a}
  </style>
  <div class="g2">
    <div class="f14c f14c-bl bx" style="background:transparent;border:1.5px solid #4a80c0"><strong>DUERP</strong> <span style="font-size:12px">Le <em>Document Unique d'Évaluation des Risques Professionnels</em> recense tous les risques identifiés. Demandez-en une copie au proviseur ou au DDFPT.</span></div>
    <div class="f14c f14c-gn bx" style="background:transparent;border:1.5px solid #2aaa8a"><strong>Responsabilité collective</strong> <span style="font-size:12px">Chef d'établissement, DDFPT, enseignants, agents techniques et élèves sont tous acteurs de la prévention.</span></div>
    <div class="f14c f14c-g2 bx" style="background:transparent;border:1.5px solid #3aaa5a"><strong>En cas d'incident</strong><span style="font-size:12px">Toujours signaler, consigner et analyser ce qu'il s'est passé, même si l'incident semble mineur, pour éviter toute répétition.</span></div>
    <div class="f14c f14c-or bx" style="background:transparent;border:1.5px solid #e8820a"><strong>Produits chimiques</strong> <span style="font-size:12px">Consulter les fiches de données de sécurité (FDS) avant utilisation. Pictogrammes, EPI requis et gestes en cas d'accident.</span></div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
    La sécurité : une compétence à construire, pas une leçon à part
  </h3>
  <div class="al" style="background:transparent;border:1.5px solid #FFDDA9">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
    <div>Il ne s'agit <strong>pas</strong> de prévoir une "séance sécurité" en début d'année, mais bien d'<strong>intégrer systématiquement la réflexion sur les risques à chaque séance expérimentale</strong>. Cette approche donne du sens aux règles et favorise leur appropriation durable par les élèves.</div>
  </div>
  <ul style="margin-top:10px">
    <li>La sécurité en TP est un <strong>levier pédagogique</strong>, pas une contrainte administrative</li>
    <li>Elle fait partie intégrante de l'enseignement scientifique en voie professionnelle</li>
    <li>Un élève capable d'évaluer un risque et d'adapter son comportement a acquis une <strong>compétence clé de son futur métier</strong></li>
  </ul>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Lors des premières séances de TP, amener les élèves à verbaliser eux-mêmes certains risques peut rendre les échanges beaucoup plus concrets : <em>« Que pourrait-il se passer si… ? Quel geste protège ? Pourquoi ? »</em>. Quand un oubli d'EPI survient, c'est souvent une bonne occasion de faire réfléchir la classe collectivement, bien plus efficace qu'un simple rappel de règle.
  </div>
</div>
`},

'f15':{n:'F15',t:'La 3e Prépa-métiers : cadre et organisation',s:'Une classe de collège accueillie en lycée professionnel',b:`
<style>
  .f15c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
  .f15c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
  .f15c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
  .f15c:hover::before{opacity:1}
  .f15-pill{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap;margin:3px 4px 3px 0;transition:all .15s}
  .f15-pill:hover{background:#4a80c0;color:#fff}
  .f15-pill svg{flex-shrink:0}
</style>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
    Une classe de collège en lycée professionnel
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    La <strong>3ᵉ « Prépa-métiers »</strong> (3PM) est une classe de <strong>fin de cycle 4</strong>, accueillie le plus souvent en lycée professionnel, destinée à des élèves volontaires qui se projettent vers la <strong>voie professionnelle ou l'apprentissage</strong>. Vous y enseignez les mathématiques et la physique-chimie au <strong>programme du collège</strong> et non aux programmes MPC des diplômes professionnels.
  </div>
  <p style="margin-top:10px"><strong>Cadre réglementaire :</strong></p>
  <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:4px">
    <a class="f15-pill" href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000038386769/" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      Arrêté du 10 avril 2019 — organisation des enseignements
    </a>
    <a class="f15-pill" href="https://www.education.gouv.fr/bo/19/Hebdo31/MENE1922034N.htm" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      Circulaire du 23 juillet 2019 — cadre national
    </a>
    <a class="f15-pill" href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006071191/LEGISCTA000037103024/" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      Articles D. 337-172 à D. 337-175 — Code de l'éducation
    </a>
  </div>
  <div class="g2" style="grid-template-columns:repeat(2,1fr);gap:10px;margin-top:10px">
    <div class="f15c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong>25 h disciplinaires</strong><span style="font-size:12px;display:block;margin-top:4px">Dont les maths-physique-chimie, au programme du cycle 4 (socle commun de connaissances, de compétences et de culture).</span></div>
    <div class="f15c bx" style="background:transparent;border:1px solid #e8820a;border-left:3px solid #e8820a;--bar:#e8820a"><strong>5 h de découverte pro</strong><span style="font-size:12px;display:block;margin-top:4px">Des métiers et des formations, terrain privilégié pour donner du sens aux maths et sciences.</span></div>
    <div class="f15c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong>Stages &amp; immersions</strong><span style="font-size:12px;display:block;margin-top:4px">Une séquence d'observation (1 semaine max.) et des stages (1 à 4 semaines dans l'année).</span></div>
    <div class="f15c bx" style="background:transparent;border:1px solid #7a5bb5;border-left:3px solid #7a5bb5;--bar:#7a5bb5"><strong>Certification Pix</strong><span style="font-size:12px;display:block;margin-top:4px">Obligatoire en classe de 3<sup>e</sup> à intégrer au plan de l'année.</span></div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
    Ce qui change par rapport au CAP et au Bac Pro
  </h3>
  <div class="g2" style="grid-template-columns:repeat(2,1fr);gap:10px;margin-top:6px">
    <div class="f15c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070"><strong>Programme du cycle 4</strong><span style="font-size:12px;display:block;margin-top:4px">Et non les programmes de MPC.</span></div>
    <div class="f15c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong>Pas de CCF, pas de grille</strong><span style="font-size:12px;display:block;margin-top:4px">L'évaluation se fait par compétences et alimente le livret scolaire (LSU).</span></div>
    <div class="f15c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong>Horizon : DNB pro</strong><span style="font-size:12px;display:block;margin-top:4px">Et construction du projet d'orientation, la classe est tournée vers la suite.</span></div>
    <div class="f15c bx" style="background:transparent;border:1px solid #e8820a;border-left:3px solid #e8820a;--bar:#e8820a"><strong>Fin de scolarité obligatoire</strong><span style="font-size:12px;display:block;margin-top:4px">Forte hétérogénéité, enjeux de confiance et de raccrochage.</span></div>
  </div>
  <div class="al">
    <svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    <span>Les fiches du kit sur les <strong>grilles CAP / Bac Pro</strong> (F48 à F51) et sur le <strong>CCF</strong> ne s'appliquent pas ici. En revanche, les fiches sur les <strong>démarches</strong>, la <strong>différenciation</strong> et la <strong>gestion de classe</strong> restent pleinement utiles.</span>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    Adapter votre enseignement de MPC en 3PM
  </h3>
  <ul>
    <li><strong>Donner du sens par les métiers</strong> : appuyez-vous sur les 5 h de découverte professionnelle et sur les stages pour contextualiser (mesures, proportions, énergie, sécurité).</li>
    <li><strong>Travailler par compétences</strong> du socle (chercher, modéliser, représenter, raisonner, calculer, communiquer) plutôt que par la note seule.</li>
    <li><strong>Soigner le raccrochage</strong> : objectifs courts, réussites visibles, droit à l'erreur beaucoup d'élèves arrivent avec une relation fragile aux mathématiques - Physique-Chimie.</li>
    <li><strong>Préparer progressivement le DNB</strong> : introduisez tôt des questions courtes / QCM et des temps d'oral en vue de la soutenance de projet.</li>
  </ul>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Ressources officielles
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:4px">
    <a class="f15-pill" href="https://eduscol.education.fr/cid57362/la-3eme-prepa-metiers.html" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      Éduscol — La classe de 3ᵉ « prépa-métiers »
    </a>
    <a class="f15-pill" href="https://www.onisep.fr/orientation/le-college/la-3-prepa-metiers" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      Onisep — La 3ᵉ prépa-métiers — présentation
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    En 3PM, votre meilleure alliée est la <strong>découverte professionnelle</strong> : une visite d'atelier ou un stage devient le support concret d'une séance de maths ou de physique-chimie. Reliez systématiquement une notion à un geste métier, et nommez la compétence travaillée, les élèves perçoivent mieux le sens, et c'est exactement ce que valorise le DNB série professionnelle.
  </div>
</div>
`},

'f16':{n:'F16',t:'Le DNB série professionnelle',s:'Modalités et préparation à compter de la session 2026',b:`
<style>
  .f16c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
  .f16c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
  .f16c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
  .f16c:hover::before{opacity:1}
  .f16-pill{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap;margin:3px 4px 3px 0;transition:all .15s}
  .f16-pill:hover{background:#4a80c0;color:#fff}
  .f16-pill svg{flex-shrink:0}
</style>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
    Le DNB série professionnelle — ce qui change à la session 2026
  </h3>
  <p>Les élèves de 3PM passent la <strong>série professionnelle</strong> du diplôme national du brevet (comme les SEGPA, ULIS ou UPE2A). <strong>À compter de la session 2026, les modalités évoluent nettement.</strong></p>
  <p>Le diplôme est obtenu avec une <strong>moyenne finale ≥ 10 / 20</strong> (fin de la notation sur 800 points). Deux composantes :</p>
  <div class="g2" style="grid-template-columns:2fr 3fr;gap:12px;margin-top:8px">
    <div class="f16c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0;text-align:center;padding:14px">
      <div style="font-size:32px;font-weight:900;color:#4a80c0;line-height:1">40 %</div>
      <strong style="display:block;margin:4px 0 6px">Contrôle continu</strong>
      <span style="font-size:11.5px;line-height:1.4;display:block">Moyenne des moyennes annuelles de toutes les disciplines de 3ᵉ (toutes au coefficient 1).</span>
    </div>
    <div class="f16c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070;text-align:center;padding:14px">
      <div style="font-size:32px;font-weight:900;color:#b54070;line-height:1">60 %</div>
      <strong style="display:block;margin:4px 0 6px">Épreuves terminales</strong>
      <span style="font-size:11.5px;line-height:1.4;display:block"><strong>Quatre écrits</strong> et une <strong>soutenance orale</strong> de projet.</span>
    </div>
  </div>
  <p style="margin-top:8px;font-size:12.5px;color:var(--tmid)">Et non plus la validation des 8 composantes du socle.</p>
  <table class="tbl"><thead><tr><th>Épreuve terminale</th><th>Durée</th><th>Notée sur</th><th>Coef.</th></tr></thead>
  <tbody>
    <tr><td>Français</td><td>3 h</td><td>100</td><td>2</td></tr>
    <tr><td><strong>Mathématiques</strong></td><td>2 h</td><td>20</td><td><strong>2</strong></td></tr>
    <tr><td>Histoire-géographie &amp; EMC</td><td>2 h</td><td>40 + 20</td><td>1,5 + 0,5</td></tr>
    <tr><td><strong>Sciences</strong> (2 disciplines)</td><td>1 h</td><td>20</td><td><strong>2</strong></td></tr>
    <tr><td>Soutenance orale de projet</td><td>15 min</td><td>20</td><td>2</td></tr>
  </tbody></table>
  <p style="font-size:12.5px;margin-top:4px">À noter : <strong>vos deux disciplines pèsent lourd</strong>, mathématiques et physique-chimie, représentent à elles seules 4 points de coefficient sur l'ensemble des épreuves terminales.</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M9 2v6.5L4.5 17A2 2 0 0 0 6.3 20h11.4a2 2 0 0 0 1.8-2.9L15 8.5V2"/><line x1="8" y1="2" x2="16" y2="2"/><line x1="7" y1="14" x2="17" y2="14"/></svg>
    Vos deux épreuves : mathématiques et sciences
  </h3>
  <p><strong>Mathématiques</strong> — durée <strong>2 h</strong>, en <strong>deux parties</strong> :</p>
  <div class="g2" style="grid-template-columns:1fr 1fr;gap:10px;margin-top:8px">
    <div class="f16c bx" style="background:transparent;border:1px solid #e8820a;border-left:3px solid #e8820a;--bar:#e8820a">
      <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:4px">
        <strong>Partie 1 — Automatismes</strong>
        <span style="font-size:18px;font-weight:900;color:#e8820a">6 pts</span>
      </div>
      <span style="font-size:11.5px;display:inline-block;background:#fff0c8;color:#c07010;padding:2px 8px;border-radius:99px;font-weight:700;margin-bottom:6px">Sans calculatrice</span>
      <span style="font-size:12px;display:block;line-height:1.5">Questions courtes : réponse directe, QCM, vrai / faux. <em>Points de rédaction inclus.</em></span>
    </div>
    <div class="f16c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80">
      <div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:4px">
        <strong>Partie 2 — Raisonnement</strong>
        <span style="font-size:18px;font-weight:900;color:#1d9d80">14 pts</span>
      </div>
      <span style="font-size:11.5px;display:inline-block;background:#c8ecd4;color:#1d9d80;padding:2px 8px;border-radius:99px;font-weight:700;margin-bottom:6px">Avec calculatrice</span>
      <span style="font-size:12px;display:block;line-height:1.5">Exercices de résolution de problèmes. <em>Points de rédaction inclus.</em></span>
    </div>
  </div>
  <p>Les élèves bénéficiant d'un protocole particulier peuvent être dispensés de la première partie.</p>
  <p><strong>Sciences</strong> : épreuve notée <strong>sur 20</strong>, portant sur <strong>deux disciplines</strong> parmi physique-chimie, SVT et technologie, <strong>désignées environ deux mois avant l'examen</strong>. Chaque partie est notée sur 10, avec un temps indicatif de 30 minutes. <strong>Pour la session 2026</strong> (métropole, La Réunion, Mayotte, Antilles-Guyane), les disciplines retenues sont la <strong>physique-chimie et la SVT</strong> ; l'exercice de physique-chimie est allégé (7 questions au maximum).</p>
  <div class="al yw">
    <svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    <span><strong>Point de vigilance — programmes.</strong> Les sujets portent sur les programmes du <strong>cycle 4 jusqu'à la session 2026</strong> ; à partir de la <strong>session 2027</strong>, ils porteront sur les programmes de la <strong>classe de 3ᵉ</strong>. Vérifiez chaque année la note de service en vigueur et appuyez-vous sur les <strong>sujets zéro</strong> publiés sur Éduscol.</span>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Ressources officielles
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:4px">
    <a class="f16-pill" href="https://www.education.gouv.fr/le-diplome-national-du-brevet-10613" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      education.gouv.fr — Le diplôme national du brevet, modalités
    </a>
    <a class="f16-pill" href="https://pedagogie.ac-lille.fr/maths-physique-chimie/dnb-professionnel-2026-sujets-0-modalites-et-ressources/" target="_blank" rel="noopener">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      ac-lille.fr — DNB professionnel 2026, sujets zéro et ressources
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Le DNB se prépare dès septembre, pas en avril. Glissez régulièrement, dans vos évaluations ordinaires, des <strong>questions courtes type partie 1</strong> (réponse directe, QCM, vrai/faux) les élèves s'habituent à la forme sans qu'on en fasse un événement, et vous repérez vite ceux qui basculent. Pour la <strong>soutenance orale</strong>, transformez un projet de séquence en mini-présentation : c'est doublement utile, vous travaillez l'oral et vous donnez de la matière concrète à raconter le jour J.
  </div>
</div>
`},

'f17':{n:'F17',t:'Les automatismes en Bac Pro et CAP',s:'Rituels courts — les 3 types de questions, communs aux deux voies',b:`
<style>
  .f47c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
  .f47c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
  .f47c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
  .f47c:hover::before{opacity:1}
  .f47q{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin:8px 0}
  .f47q .qt{border-radius:11px;overflow:hidden;background:#fff;border:1px solid var(--slight,#eadfe4);box-shadow:0 2px 8px rgba(181,64,112,.08)}
  .f47q .qh{padding:8px 11px;color:#fff;font-weight:800;font-size:12.5px;display:flex;align-items:center;gap:7px}
  .f47q .qb{padding:9px 11px;font-size:11.6px;line-height:1.45;color:var(--tmid,#555)}
  .f47-lvl{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:8px 0}
  .f47-lvl .lv{border:1px solid var(--slight,#eadfe4);border-radius:11px;padding:0;overflow:hidden;background:#fff}
  .f47-lvl .lh{padding:9px 12px;color:#fff;font-weight:800;font-size:13px;display:flex;align-items:center;gap:7px}
  .f47-lvl .lb{padding:9px 12px}
  .f47-lvl ul{margin:4px 0 0 14px;font-size:11.7px;line-height:1.65;color:var(--tmid,#555)}
  .f47-pill{display:inline-flex;align-items:center;gap:5px;padding:5px 11px;background:#fbeaf0;border:1.5px solid #b54070;border-radius:20px;font-size:11.5px;color:#7a1f45;text-decoration:none;font-weight:600;margin:4px 5px 2px 0}
  .f47-niv{display:flex;flex-direction:column;gap:10px;margin:8px 0}
  .f47-niv .nv{display:flex;border-radius:11px;overflow:hidden;border:1px solid var(--slight,#eadfe4);background:#fff}
  .f47-niv .nv-tag{flex:0 0 168px;display:flex;flex-direction:column;justify-content:center;padding:12px 14px;color:#fff}
  .f47-niv .nv-tag b{font-size:10px;text-transform:uppercase;letter-spacing:.04em;opacity:.85;display:block}
  .f47-niv .nv-tag span{font-size:13.5px;font-weight:800;margin-top:2px;display:block}
  .f47-niv .nv-body{flex:1;padding:11px 14px;font-size:12px;line-height:1.5;color:var(--tmid,#555)}
  .f47-niv .nv-body em{display:block;margin-top:5px;font-style:normal;font-size:11.3px;opacity:.85}
  @media(max-width:620px){.f47q{grid-template-columns:1fr}.f47-lvl{grid-template-columns:1fr}.f47-niv .nv{flex-direction:column}.f47-niv .nv-tag{flex:none}}
</style>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
    Définition et objectifs
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Les automatismes visent à <strong>construire et entretenir des aptitudes</strong> dans les domaines du calcul, des grandeurs, des mesures et de la géométrie. Il s'agit d'automatiser des procédures, méthodes et stratégies dont la maîtrise favorise la réussite en MPC : plus les élèves sont à l'aise, plus ils gagnent en <strong>confiance et en situation de réussite</strong>. Communs au <strong>Bac Pro</strong> et au <strong>CAP</strong>, ils s'appuient sur les attendus du <strong>cycle 4</strong>.
  </div>
  <div class="al gn" style="margin-top:10px">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
    <div>Les capacités attendues ne font <strong>jamais l'objet d'un chapitre spécifique</strong> : elles relèvent d'un <strong>entraînement régulier sur toute la formation</strong>. Elles constituent aussi un atout réel pour la poursuite d'études (BTS) et la vie sociale et professionnelle.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    Organisation — quand et comment ?
  </h3>
  <div class="g2">
    <div class="f47c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Rituel de 5–10 min</strong><span style="font-size:12px;display:block;margin-top:3px">En début ou fin de séance, correction comprise. Format préconisé par Éduscol. 2–3 questions régulières valent mieux que 10 questions occasionnelles.</span></div>
    <div class="f47c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> Séances de consolidation</strong><span style="font-size:12px;display:block;margin-top:3px">Lors de l'accompagnement renforcé (groupes à effectifs réduits), pour traiter les difficultés persistantes repérées lors des rituels.</span></div>
    <div class="f47c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Sur toute la durée</strong><span style="font-size:12px;display:block;margin-top:3px">Un entraînement régulier vaut mieux qu'une séquence intensive : les automatismes se construisent dans la durée (l'année en Bac Pro, les deux ans en CAP).</span></div>
    <div class="f47c bx" style="background:transparent;border:1px solid #7a5bb5;border-left:3px solid #7a5bb5;--bar:#7a5bb5"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg> Traçabilité, pas de note</strong><span style="font-size:12px;display:block;margin-top:3px">Suivi individuel géré par l'élève (réussites / difficultés). Les rituels ne sont pas notés au bulletin : leur valeur est uniquement formative.</span></div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
    Les trois niveaux de question
  </h3>
  <div class="f47-niv">
    <div class="nv" style="border-left:4px solid #b54070">
      <div class="nv-tag" style="background:linear-gradient(135deg,#b54070,#d4789a)"><b>Type 1</b><span>Question flash</span></div>
      <div class="nv-body">QCM, vrai/faux ou réponse courte, <strong>déconnectée de la séquence</strong> en cours. 1 à 2 min.<em>Ex. : « 15 % de 200 ? » · « 1 dm² = 100 cm² — vrai ou faux ? »</em></div>
    </div>
    <div class="nv" style="border-left:4px solid #4a80c0">
      <div class="nv-tag" style="background:linear-gradient(135deg,#4a80c0,#75afd6)"><b>Type 2</b><span>Question intermédiaire</span></div>
      <div class="nv-body">Réponse libre, <strong>contextualisée</strong> : un mini-problème issu de la vie courante ou du domaine professionnel. 3 à 5 min.<em>Ex. : « Une voiture consomme 6 L/100 km. Estimer pour 400 km. »</em></div>
    </div>
    <div class="nv" style="border-left:4px solid #1d9d80">
      <div class="nv-tag" style="background:linear-gradient(135deg,#1d9d80,#4ec4a4)"><b>Type 3</b><span>Prise d'initiative</span></div>
      <div class="nv-body">Situation ouverte, l'élève choisit sa <strong>méthode</strong> : esprit critique et autonomie. Idéal en différenciation pour les élèves en réussite.<em>Ex. : « Ce graphique est-il cohérent avec le tableau ? Justifier. »</em></div>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    Côté format : QCM, V/F, réponse directe
  </h3>
  <div class="f47q">
    <div class="qt"><div class="qh" style="background:linear-gradient(135deg,#1d9d80,#4ec4a4)"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg> QCM</div><div class="qb">3 à 4 propositions ; une ou plusieurs réponses correctes. Rapide à corriger, idéal en vidéoprojection.</div></div>
    <div class="qt"><div class="qh" style="background:linear-gradient(135deg,#4386b8,#75afd6)"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>/<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Vrai / Faux</div><div class="qb">Toujours assorti d'une <strong>justification</strong> : c'est elle qui révèle le raisonnement et les conceptions erronées.</div></div>
    <div class="qt"><div class="qh" style="background:linear-gradient(135deg,#b54070,#d4789a)"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg> Réponse directe</div><div class="qb">Réponse libre, sans choix proposé. Mobilise pleinement le calcul mental et la mémoire de travail.</div></div>
  </div>
  <p style="font-size:11.7px;color:var(--tmid,#555);margin:6px 0 4px">…à décliner sur des <strong>modalités variées</strong> pour éviter la lassitude :</p>
  <div class="bdg">
    <span>À l'oral</span><span>À l'écrit</span><span>Ardoise</span><span>Sur ordinateur</span><span>Quiz en ligne (Kahoot…)</span><span>Vidéoprojection</span><span>Recensement instantané</span><span>Flashcards (Anki)</span><span>Exerciseur (WIMS)</span><span>Individuellement</span><span>En groupe</span>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
    Spécificités par niveau
  </h3>
  <div class="f47-lvl">
    <div class="lv"><div class="lh" style="background:linear-gradient(135deg,#4386b8,#75afd6)">Bac Pro</div><div class="lb"><ul><li><strong>Calcul numérique</strong> : mental, fractions, %, puissances de 10, écriture scientifique, ordre de grandeur, arrondi.</li><li><strong>Algèbre &amp; fonctions</strong> : équations simples, calcul littéral, lecture graphique, tableaux de valeurs.</li><li><strong>Géométrie &amp; mesures</strong> : périmètre / aire / volume, trigonométrie du triangle rectangle, conversions.</li><li><strong>Statistiques &amp; probabilités</strong> : moyenne, médiane, lecture de tableaux, notions de probabilité.</li><li><em>Enjeu post-bac</em> : un atout pour le BTS.</li></ul></div></div>
    <div class="lv"><div class="lh" style="background:linear-gradient(135deg,#c07010,#e8a13e)">CAP</div><div class="lb"><ul><li><strong>Sans calculatrice en priorité</strong> (sauf si la question l'exige explicitement).</li><li>Entraînement sur les <strong>deux années</strong>, depuis les tests de positionnement.</li><li><strong>Calcul</strong> &amp; <strong>proportionnalité / grandeurs</strong> : 4ᵉ proportionnelle, %, échelles, conversions d'unités.</li><li><strong>Algèbre &amp; fonctions</strong> : équations ax = b, lecture graphique, repère orthogonal.</li><li><strong>Statistiques &amp; géométrie</strong> : fréquence, moyenne, Pythagore, aires.</li><li><em>Accompagnement renforcé CAP</em> (1 h / groupe) pour les difficultés persistantes.</li></ul></div></div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Ressources
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="https://www.pedagogie.ac-aix-marseille.fr/upload/docs/application/pdf/2019-09/ra19_lycee_p_cap-2_math_automatismes_1171061.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Développer des automatismes — Éduscol (CAP / 2de Pro)
    </a>
    <a href="https://eduscol.education.gouv.fr/5895/programmes-et-ressources-en-mathematiques-voie-professionnelle" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Programmes et ressources maths — voie pro — Éduscol
    </a>
    <a href="https://mathspc-lp.wp.ac-dijon.fr/gmpcie-travailler-les-automatismes/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      GMPCIE — 21 séquences flash automatismes
    </a>
    <a href="https://jean-noel-simonneau.canoprof.fr/eleve/cap/math%C3%A9matiques/automatismes_eleve" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Automatismes CAP — exercices en ligne par thème
    </a>
  </div>
</div>

<div style="margin:8px 0 2px">
  <a href="#" onclick="event.preventDefault();openModal('f21')" class="f47-pill">F21 · Algorithmique</a>
  <a href="#" onclick="event.preventDefault();openModal('f20')" class="f47-pill">F20 · Vocabulaire ensembliste</a>
</div>

<div class="al gn" style="margin-top:10px">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Installer un <strong>rituel fixe</strong> dès la première semaine : mêmes créneaux, temps limité (chrono visible), correction immédiate. Varier les formats et <strong>valoriser systématiquement les progrès</strong>, même petits. <strong>Spécificité CAP</strong> : le rapport à l'échec scolaire est souvent plus vif, contextualiser dès que possible (un % de remise client, une conversion utile en atelier) et privilégier la correction collective au tableau, sans nommer les élèves. L'objectif : une <strong>acquisition durable</strong>, pas la perfection immédiate.
  </div>
</div>
`},

'f18':{n:'F18',t:'Variabilité de la mesure et incertitudes en Bac Pro',s:'De la 2de aux incertitudes en 1re/Tle — par imprégnation, jamais en cours formel',b:`
<style>
  .f50x-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:8px 0}
  .f50x-card{border-radius:13px;overflow:hidden;background:#fff;border:1px solid var(--slight,#eadfe4);box-shadow:0 2px 8px rgba(181,64,112,.08)}
  .f50x-head{padding:10px 13px;color:#fff;font-weight:800;font-size:12.5px;line-height:1.3;display:flex;align-items:center;gap:8px}
  .f50x-head svg{flex:0 0 auto}
  .f50x-body{padding:11px 13px;font-size:12.2px;line-height:1.5;color:var(--tmid,#555)}
  .f50x-pink .f50x-head{background:linear-gradient(135deg,#b54070,#d4789a)}
  .f50x-blue .f50x-head{background:linear-gradient(135deg,#4386b8,#75afd6)}
  .f50x-tag{font-size:10px;font-weight:700;letter-spacing:.03em;text-transform:uppercase;background:rgba(255,255,255,.22);padding:2px 7px;border-radius:20px;margin-left:auto;white-space:nowrap}
  .f50x-tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(135px,1fr));gap:8px;margin:8px 0}
  .f50x-tile{border:1px solid var(--slight,#eadfe4);border-left:3px solid var(--tc,#b54070);border-radius:8px;padding:8px 10px;background:#fff;transition:transform .2s ease,box-shadow .2s ease}
  .f50x-tile:hover{transform:translateY(-2px);box-shadow:0 6px 14px rgba(0,0,0,.12)}
  .f50x-tile h5{margin:0 0 2px;font-size:12.5px;display:flex;align-items:center;gap:6px;color:var(--tdark,#3a2a31)}
  .f50x-tile p{margin:0;font-size:11.6px;line-height:1.4;color:var(--tmid,#555)}
  .f50x-h{margin:15px 0 5px;font-size:13.5px;font-weight:800;color:var(--tdark,#3a2a31)}
  .f50x-note{border-radius:9px;background:rgba(74,128,192,.08);border:1px solid rgba(74,128,192,.25);padding:9px 12px;font-size:12px;line-height:1.5;margin:8px 0;color:var(--tmid,#555)}
  .f50x-note b{color:#356a9c}
  .f50x-pill{display:inline-flex;align-items:center;gap:5px;padding:5px 11px;background:#fbeaf0;border:1.5px solid #b54070;border-radius:20px;font-size:11.5px;color:#7a1f45;text-decoration:none;font-weight:600;margin:4px 5px 2px 0}
  .f50x-cap{font-size:11.3px;color:#8a8a8a;text-align:center;margin:4px 0 2px}
  @media(max-width:620px){.f50x-grid{grid-template-columns:1fr}}
</style>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
    Un module transversal, sur les trois années
  </h3>
  <p style="font-size:13px">Aucune mesure n'est exacte. Ce domaine sensibilise les élèves à la variabilité de toute mesure, par imprégnation dans les autres modules,  jamais en cours formel. Il court sur tout le cycle, en montant en exigence.</p>
</div>

<div class="f50x-grid">
  <div class="f50x-card f50x-pink">
    <div class="f50x-head">
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      Seconde<span class="f50x-tag">Sensibilisation</span>
    </div>
    <div class="f50x-body">« Variabilité de la mesure ». Approche qualitative : esprit critique face aux valeurs obtenues, ordre de grandeur, incertitude des appareils. Pas de calcul d'incertitude.</div>
  </div>
  <div class="f50x-card f50x-blue">
    <div class="f50x-head">
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m8 12 3 3 5-6"/></svg>
      Première &amp; Terminale<span class="f50x-tag">Exigible au bac</span>
    </div>
    <div class="f50x-body">Domaine transversal « Mesures et incertitudes », commun à tous les groupements et évalué à l'examen. L'accent reste sur l'ordre de grandeur des incertitudes, pas sur le calcul précis.</div>
  </div>
</div>

<div class="f50x-h">Juste et fidèle : l'image de la cible</div>
<svg width="100%" viewBox="0 0 680 250" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit;display:block">
  <circle cx="100" cy="105" r="52" fill="none" stroke="#d6d6d6" stroke-width="1"/><circle cx="100" cy="105" r="34" fill="none" stroke="#d6d6d6" stroke-width="1"/><circle cx="100" cy="105" r="17" fill="none" stroke="#d6d6d6" stroke-width="1"/><circle cx="100" cy="105" r="2.5" fill="#bbb"/>
  <circle cx="78" cy="79" r="4.5" fill="#4a80c0"/><circle cx="94" cy="91" r="4.5" fill="#4a80c0"/><circle cx="70" cy="109" r="4.5" fill="#4a80c0"/><circle cx="108" cy="123" r="4.5" fill="#4a80c0"/><circle cx="88" cy="103" r="4.5" fill="#4a80c0"/>
  <text x="100" y="180" text-anchor="middle" font-size="13.5" font-weight="700" fill="#444">Ni juste,</text><text x="100" y="197" text-anchor="middle" font-size="13.5" font-weight="700" fill="#444">ni fidèle</text>

  <circle cx="260" cy="105" r="52" fill="none" stroke="#d6d6d6" stroke-width="1"/><circle cx="260" cy="105" r="34" fill="none" stroke="#d6d6d6" stroke-width="1"/><circle cx="260" cy="105" r="17" fill="none" stroke="#d6d6d6" stroke-width="1"/><circle cx="260" cy="105" r="2.5" fill="#bbb"/>
  <circle cx="282" cy="121" r="4.5" fill="#4a80c0"/><circle cx="286" cy="125" r="4.5" fill="#4a80c0"/><circle cx="279" cy="127" r="4.5" fill="#4a80c0"/><circle cx="288" cy="120" r="4.5" fill="#4a80c0"/><circle cx="283" cy="124" r="4.5" fill="#4a80c0"/>
  <text x="260" y="180" text-anchor="middle" font-size="13.5" font-weight="700" fill="#444">Fidèle,</text><text x="260" y="197" text-anchor="middle" font-size="13.5" font-weight="700" fill="#444">pas juste</text>

  <circle cx="420" cy="105" r="52" fill="none" stroke="#d6d6d6" stroke-width="1"/><circle cx="420" cy="105" r="34" fill="none" stroke="#d6d6d6" stroke-width="1"/><circle cx="420" cy="105" r="17" fill="none" stroke="#d6d6d6" stroke-width="1"/><circle cx="420" cy="105" r="2.5" fill="#bbb"/>
  <circle cx="392" cy="107" r="4.5" fill="#4a80c0"/><circle cx="446" cy="101" r="4.5" fill="#4a80c0"/><circle cx="422" cy="79" r="4.5" fill="#4a80c0"/><circle cx="418" cy="131" r="4.5" fill="#4a80c0"/><circle cx="421" cy="106" r="4.5" fill="#4a80c0"/>
  <text x="420" y="180" text-anchor="middle" font-size="13.5" font-weight="700" fill="#444">Juste,</text><text x="420" y="197" text-anchor="middle" font-size="13.5" font-weight="700" fill="#444">pas fidèle</text>

  <circle cx="580" cy="105" r="52" fill="none" stroke="#1d9d80" stroke-width="2"/><circle cx="580" cy="105" r="34" fill="none" stroke="#1d9d80" stroke-width="1"/><circle cx="580" cy="105" r="17" fill="none" stroke="#1d9d80" stroke-width="1"/><circle cx="580" cy="105" r="2.5" fill="#1d9d80"/>
  <circle cx="581" cy="104" r="4.5" fill="#4a80c0"/><circle cx="578" cy="107" r="4.5" fill="#4a80c0"/><circle cx="583" cy="103" r="4.5" fill="#4a80c0"/><circle cx="580" cy="106" r="4.5" fill="#4a80c0"/><circle cx="579" cy="102" r="4.5" fill="#4a80c0"/>
  <text x="580" y="180" text-anchor="middle" font-size="13.5" font-weight="700" fill="#1d9d80">Juste</text><text x="580" y="197" text-anchor="middle" font-size="13.5" font-weight="700" fill="#1d9d80">et fidèle</text>

  <text x="340" y="232" text-anchor="middle" font-size="11.5" fill="#8a8a8a">Chaque point = une mesure répétée du même objet · cible verte = l'objectif</text>
</svg>
<p style="font-size:12px;line-height:1.45;margin:4px 0 0;color:var(--tmid,#555)">Erreur aléatoire = points dispersés (on la réduit en répétant les mesures). Erreur systématique = points décentrés (on la corrige sur l'appareil ou le protocole).</p>

<div class="f50x-h">D'où vient l'écart ? Quatre sources à faire émerger</div>
<div class="f50x-tiles">
  <div class="f50x-tile" style="--tc:#b54070">
    <h5><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#b54070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4 4 0 1 0 5 0z"/></svg>Environnement</h5>
    <p>Température, pression, humidité, vibrations…</p>
  </div>
  <div class="f50x-tile" style="--tc:#4a80c0">
    <h5><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4a80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15a8 8 0 1 1 16 0"/><path d="m13 12 3-2"/></svg>Appareil</h5>
    <p>Étalonnage, sensibilité, classe de précision, temps de réponse.</p>
  </div>
  <div class="f50x-tile" style="--tc:#1d9d80">
    <h5><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1d9d80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/></svg>Méthode</h5>
    <p>Protocole approximatif, paramètre mal choisi.</p>
  </div>
  <div class="f50x-tile" style="--tc:#e8820a">
    <h5><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e8820a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>Opérateur</h5>
    <p>Lecture, parallaxe, réflexe, fatigue.</p>
  </div>
</div>

<div class="f50x-note"><b>Écrire un résultat :</b> X = (x ± Δx) avec unité. La valeur vraie a de bonnes chances d'être dans l'intervalle [x − Δx ; x + Δx] — l'idée qualitative compte, pas le calcul. Nombre adapté de chiffres significatifs ; comparer à une valeur de référence pour conclure (ou non) à la compatibilité.</div>

<div style="margin:6px 0 2px">
  <a href="#" onclick="event.preventDefault();openModal('f19')" class="f50x-pill">F19 · Électricité</a>
  <a href="#" onclick="event.preventDefault();openModal('f21')" class="f50x-pill">F21 · Algorithmique</a>
  <a href="#" onclick="event.preventDefault();openModal('f17')" class="f50x-pill">F17 · Automatismes</a>
</div>

<div style="margin:4px 0 2px">
  <a href="https://eduscol.education.gouv.fr/sites/default/files/document/ra19lyceep2phychivariabilite-mesuretelemetre-robot1221558pdf-85635.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:5px 11px;background:#e8f0fa;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2c5e8e;text-decoration:none;font-weight:600">
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
    Éduscol — Variabilité de la mesure : télémètre d'un robot (PDF)
  </a>
</div>

<div class="al gn" style="margin-top:10px">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div style="font-size:13px">
    Conseil terrain. Une question rituelle suffit pour ancrer la variabilité : « Jusqu'où peut-on faire confiance à ce résultat ? », après chaque mesure. Faire répéter la même mesure par plusieurs binômes et comparer au tableau fait émerger la dispersion mieux qu'un cours. Exemple clé en main (Eduscol) : le télémètre d'un robot (20 mesures, tableur, histogramme). En 2de, l'approche reste qualitative ; le calcul d'incertitude-type relève de la 1re/Tle.
  </div>
</div>
`},

'f19':{n:'F19',t:'Électricité en Bac Pro et CAP',s:'Un module transversal à ancrer dans des situations concrètes',b:`
<style>
  .f51x-h{margin:15px 0 5px;font-size:13.5px;font-weight:800;color:var(--tdark,#3a2a31)}
  .f51x-tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(135px,1fr));gap:8px;margin:8px 0}
  .f51x-tile{border:1px solid var(--slight,#eadfe4);border-left:3px solid var(--tc,#b54070);border-radius:8px;padding:8px 10px;background:#fff;transition:transform .2s ease,box-shadow .2s ease}
  .f51x-tile:hover{transform:translateY(-2px);box-shadow:0 6px 14px rgba(0,0,0,.12)}
  .f51x-tile h5{margin:0 0 2px;font-size:12.5px;display:flex;align-items:center;gap:6px;color:var(--tdark,#3a2a31)}
  .f51x-tile p{margin:0;font-size:11.6px;line-height:1.4;color:var(--tmid,#555)}
  .f51x-note{border-radius:9px;background:rgba(29,157,128,.08);border:1px solid rgba(29,157,128,.28);padding:9px 12px;font-size:12px;line-height:1.5;margin:8px 0;color:var(--tmid,#555)}
  .f51x-note b{color:#147a61}
  .f51x-cap{font-size:11.3px;color:#8a8a8a;text-align:center;margin:4px 0 2px}
  .f51x-pill{display:inline-flex;align-items:center;gap:5px;padding:5px 11px;background:#fbeaf0;border:1.5px solid #b54070;border-radius:20px;font-size:11.5px;color:#7a1f45;text-decoration:none;font-weight:600;margin:4px 5px 2px 0}
</style>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
    Un module à intégrer, pas à enseigner à part
  </h3>
  <p style="font-size:13px">L'électricité est l'un des modules transversaux de la seconde Bac Pro (BO spécial n°5 du 11 avril 2019). Pas un chapitre à programmer en début d'année : un fil rouge à ancrer dans des situations professionnelles, le plus souvent via un capteur.</p>
</div>

<div class="f51x-h">Du monde réel au signal : la chaîne du capteur</div>
<svg width="100%" viewBox="0 0 680 130" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit;display:block">
  <defs><marker id="f51arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M2 1L8 5L2 9" fill="none" stroke="#9aa3ad" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
  <rect x="50" y="38" width="132" height="50" rx="9" fill="#fdf3e8" stroke="#e8820a" stroke-width="1.3"/>
  <text x="116" y="60" text-anchor="middle" font-size="12.5" font-weight="700" fill="#a85e08">Grandeur physique</text>
  <text x="116" y="77" text-anchor="middle" font-size="11" fill="#9a7030">lumière, température…</text>
  <line x1="184" y1="63" x2="206" y2="63" stroke="#9aa3ad" stroke-width="1.6" marker-end="url(#f51arr)"/>
  <rect x="208" y="38" width="132" height="50" rx="9" fill="#eef4fb" stroke="#4a80c0" stroke-width="1.3"/>
  <text x="274" y="60" text-anchor="middle" font-size="12.5" font-weight="700" fill="#2f5d92">Capteur</text>
  <text x="274" y="77" text-anchor="middle" font-size="11" fill="#5a7aa6">photorésistance…</text>
  <line x1="342" y1="63" x2="364" y2="63" stroke="#9aa3ad" stroke-width="1.6" marker-end="url(#f51arr)"/>
  <rect x="366" y="38" width="132" height="50" rx="9" fill="#fbeaf0" stroke="#b54070" stroke-width="1.3"/>
  <text x="432" y="60" text-anchor="middle" font-size="12.5" font-weight="700" fill="#8a2f54">Signal électrique</text>
  <text x="432" y="77" text-anchor="middle" font-size="11" fill="#a85a78">tension U, intensité I</text>
  <line x1="500" y1="63" x2="522" y2="63" stroke="#9aa3ad" stroke-width="1.6" marker-end="url(#f51arr)"/>
  <rect x="524" y="38" width="132" height="50" rx="9" fill="#eaf6f1" stroke="#1d9d80" stroke-width="1.3"/>
  <text x="590" y="60" text-anchor="middle" font-size="12.5" font-weight="700" fill="#147a61">Exploitation</text>
  <text x="590" y="77" text-anchor="middle" font-size="11" fill="#4a9986">mesure, pilotage</text>
  <text x="353" y="116" text-anchor="middle" font-size="11.5" fill="#8a8a8a">Le capteur transforme une grandeur physique en signal électrique exploitable (pont diviseur, microcontrôleur).</text>
</svg>

<div class="f51x-h">Les capacités à faire mobiliser</div>
<div class="f51x-tiles">
  <div class="f51x-tile" style="--tc:#b54070">
    <h5><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#b54070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>Lire un schéma</h5>
    <p>Symboles normalisés, réaliser un montage à partir du schéma.</p>
  </div>
  <div class="f51x-tile" style="--tc:#4a80c0">
    <h5><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#4a80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Mesurer U et I</h5>
    <p>Voltmètre, ampèremètre, multimètre ; choisir le bon calibre.</p>
  </div>
  <div class="f51x-tile" style="--tc:#1d9d80">
    <h5><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#1d9d80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M8 6h8M6 8v8a2 2 0 0 0 2 2h2M18 8v8a2 2 0 0 1-2 2h-2"/></svg>Lois des circuits</h5>
    <p>Loi d'Ohm (rappel cycle 4), lois des nœuds et des mailles.</p>
  </div>
  <div class="f51x-tile" style="--tc:#e8820a">
    <h5><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e8820a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 9h10M7 13h6"/></svg>Plaque signalétique</h5>
    <p>Identifier les grandeurs nominales d'un appareil.</p>
  </div>
</div>

<div class="f51x-note"><b>Sécurité électrique — un réflexe dès la 1re séance.</b> À mobiliser à chaque manipulation, jamais en cours séparé : dispositifs de protection (fusible, disjoncteur, disjoncteur différentiel, mise à la terre), distinction protection des personnes / des matériels, vérification du montage avant mise sous tension. Lien direct avec la PSE. → <a href="#" onclick="event.preventDefault();openModal('f14')" style="color:#147a61;font-weight:600">F14 Sécurité au labo</a></div>

<div class="f51x-h" style="display:flex;align-items:center;gap:7px;margin-top:16px">
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#e8820a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"/></svg>
  Et en CAP&nbsp;?
</div>
<div style="border-radius:9px;background:rgba(232,130,10,.09);border:1px solid rgba(232,130,10,.3);border-left:3px solid #e8820a;padding:9px 12px;font-size:12px;line-height:1.5;margin:8px 0;color:var(--tmid,#555)">
  En CAP aussi, l'électricité n'est pas un chapitre&nbsp;: c'est l'un des <b style="color:#b56a08">deux modules transversaux</b> de physique-chimie, avec la <b style="color:#b56a08">Sécurité</b>. Tous deux doivent s'intégrer tout au long de la formation, au traitement des autres modules, jamais en cours dédié.
</div>
<div class="f51x-tiles">
  <div class="f51x-tile" style="--tc:#e8820a">
    <h5><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#e8820a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.3a2 2 0 0 1 3.4 0l8 13.4a2 2 0 0 1-1.7 3H3.9a2 2 0 0 1-1.7-3z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>Module « Sécurité »</h5>
    <p>Plus large qu'en Bac Pro&nbsp;: pictogrammes et étiquettes des produits chimiques, tri des déchets, EPI — mais aussi rayonnement (laser&nbsp;: classes, dangers œil/peau) et bruit (seuils de douleur). Levier direct des compétences pro liées à la sécurité. → <a href="#" onclick="event.preventDefault();openModal('f14')" style="color:#147a61;font-weight:600">F14</a></p>
  </div>
  <div class="f51x-tile" style="--tc:#b54070">
    <h5><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#b54070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>Module « Électricité »</h5>
    <p>Consolidation du collège. Les grandeurs (U, I) n'étant pas perceptibles, on leur donne du sens via des dipôles utilisés comme capteurs, au sein des autres modules : situations pro, santé, environnement.</p>
  </div>
</div>

<div style="margin:6px 0 2px">
  <a href="#" onclick="event.preventDefault();openModal('f18')" class="f51x-pill">F18 · Variabilité &amp; incertitudes</a>
  <a href="#" onclick="event.preventDefault();openModal('f21')" class="f51x-pill">F21 · Algorithmique</a>
  <a href="#" onclick="event.preventDefault();openModal('f17')" class="f51x-pill">F17 · Automatismes</a>
</div>

<div class="al gn" style="margin-top:10px">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div style="font-size:13px">
    Conseil terrain. Pas de séquence « loi d'Ohm » isolée : embarquer l'électricité dans une situation qui parle aux élèves, un capteur de lumière qui déclenche un store, une photodiode qui allume un phare, un fusible qui protège un circuit. Exemples Eduscol clés en main : allumage automatique des phares, déploiement de stores, capteur CCD, télémètre d'un robot. Quatre rituels à installer : lire le schéma avant de monter, vérifier le calibre avant de mesurer, identifier entrée/sortie de chaque capteur, poser la sécurité avant la mise sous tension. Une carte microcontrôleur en fin de séquence ferme la boucle : la mesure devient pilotage.
  </div>
</div>
`},

'f20':{n:'F20',t:'Vocabulaire ensembliste et logique en Bac Pro',s:'Former au raisonnement et à la rigueur — par imprégnation, jamais en cours dédié',b:`
<style>
  .f52x-h{margin:15px 0 5px;font-size:13.5px;font-weight:800;color:var(--tdark,#3a2a31)}
  .f52x-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:8px 0}
  .f52x-card{border-radius:13px;overflow:hidden;background:#fff;border:1px solid var(--slight,#eadfe4);box-shadow:0 2px 8px rgba(181,64,112,.08)}
  .f52x-head{padding:10px 13px;color:#fff;font-weight:800;font-size:12.5px;display:flex;align-items:center;gap:8px}
  .f52x-body{padding:11px 13px;font-size:12px;line-height:1.5;color:var(--tmid,#555)}
  .f52x-pink .f52x-head{background:linear-gradient(135deg,#b54070,#d4789a)}
  .f52x-blue .f52x-head{background:linear-gradient(135deg,#4386b8,#75afd6)}
  .f52x-tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(135px,1fr));gap:8px;margin:8px 0}
  .f52x-tile{border:1px solid var(--slight,#eadfe4);border-left:3px solid var(--tc,#b54070);border-radius:8px;padding:8px 10px;background:#fff;transition:transform .2s ease,box-shadow .2s ease}
  .f52x-tile:hover{transform:translateY(-2px);box-shadow:0 6px 14px rgba(0,0,0,.12)}
  .f52x-tile h5{margin:0 0 2px;font-size:12.5px;color:var(--tdark,#3a2a31)}
  .f52x-tile p{margin:0;font-size:11.6px;line-height:1.4;color:var(--tmid,#555)}
  .f52x-chips{margin:6px 0}
  .f52x-chip{display:inline-flex;align-items:center;gap:5px;padding:4px 10px;background:#f5f3fa;border:1px solid #d8d0ea;border-radius:20px;font-size:11.5px;color:#5a4a7a;margin:3px 4px 3px 0}
  .f52x-chip b{font-size:13px;color:#4a3a6a}
  .f52x-note{border-radius:9px;background:rgba(74,128,192,.08);border:1px solid rgba(74,128,192,.25);padding:9px 12px;font-size:12px;line-height:1.5;margin:8px 0;color:var(--tmid,#555)}
  .f52x-note b{color:#356a9c}
  .f52x-cap{font-size:11.3px;color:#8a8a8a;text-align:center;margin:2px 0}
  .f52x-pill{display:inline-flex;align-items:center;gap:5px;padding:5px 11px;background:#fbeaf0;border:1.5px solid #b54070;border-radius:20px;font-size:11.5px;color:#7a1f45;text-decoration:none;font-weight:600;margin:4px 5px 2px 0}
  @media(max-width:620px){.f52x-grid{grid-template-columns:1fr}}
</style>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="9" cy="12" r="6"/><circle cx="15" cy="12" r="6"/></svg>
    Un module transversal, pas un chapitre
  </h3>
  <p style="font-size:13px">Module transversal de maths commun aux trois années du Bac Pro (BO spécial n°5 du 11 avril 2019). Jamais un cours dédié : il prend place dans l'étude des autres modules. On vise la rigueur et le raisonnement, pas le formalisme, la maîtrise complète n'est pas exigible.</p>
</div>

<div class="f52x-h">Les ensembles, en image</div>
<svg width="100%" viewBox="0 0 680 195" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit;display:block">
  <circle cx="300" cy="92" r="72" fill="#4a80c0" fill-opacity="0.16" stroke="#4a80c0" stroke-width="1.3"/>
  <circle cx="380" cy="92" r="72" fill="#b54070" fill-opacity="0.15" stroke="#b54070" stroke-width="1.3"/>
  <text x="252" y="97" text-anchor="middle" font-size="16" font-weight="700" fill="#2f5d92">A</text>
  <text x="428" y="97" text-anchor="middle" font-size="16" font-weight="700" fill="#8a2f54">B</text>
  <text x="340" y="90" text-anchor="middle" font-size="11" fill="#555">A ∩ B</text>
  <text x="340" y="104" text-anchor="middle" font-size="10" fill="#888">(commun)</text>
  <text x="340" y="182" text-anchor="middle" font-size="11.5" fill="#8a8a8a">∪ réunion = tout le colorié · ∩ intersection = la zone commune · complémentaire = la négation</text>
</svg>

<div class="f52x-chips">
  <span class="f52x-chip"><b>∈</b> appartient</span>
  <span class="f52x-chip"><b>∉</b> n'appartient pas</span>
  <span class="f52x-chip"><b>⊂</b> est inclus dans</span>
  <span class="f52x-chip"><b>∪</b> réunion</span>
  <span class="f52x-chip"><b>∩</b> intersection</span>
  <span class="f52x-chip"><b>∅</b> ensemble vide</span>
</div>
<div class="f52x-cap">Piège fréquent : ∈ (un élément) ne se confond pas avec ⊂ (un sous-ensemble) ; et ∅ n'est pas le nombre 0.</div>

<div class="f52x-h">Deux versants du même module</div>
<div class="f52x-grid">
  <div class="f52x-card f52x-blue">
    <div class="f52x-head">Vocabulaire ensembliste</div>
    <div class="f52x-body">Ensembles de nombres (ℕ, ℝ, ℝ⁺, ℝ⁻), intervalles, appartenance et inclusion, réunion/intersection/complémentaire, ensemble vide, couple (a ; b). Ensemble solution d'une équation : 0, 1, plusieurs solutions… ou ∅.</div>
  </div>
  <div class="f52x-card f52x-pink">
    <div class="f52x-head">Logique &amp; raisonnement</div>
    <div class="f52x-body">Implication ⇒ et équivalence ⇔ (ne pas confondre avec la réciproque), quantificateurs « quel que soit » / « il existe », langage précis pour lever les ambiguïtés de la langue. Les symboles ∀ et ∃ ne sont pas au programme.</div>
  </div>
</div>

<div class="f52x-h">Les types de raisonnement</div>
<div class="f52x-tiles">
  <div class="f52x-tile" style="--tc:#b54070"><h5>Déductif</h5><p>Enchaîner hypothèses et propriétés pour conclure : la preuve.</p></div>
  <div class="f52x-tile" style="--tc:#4a80c0"><h5>Inductif</h5><p>Observer, expérimenter, conjecturer. Une conjecture n'est pas une preuve.</p></div>
  <div class="f52x-tile" style="--tc:#e8820a"><h5>Contre-exemple</h5><p>Un seul suffit pour infirmer un « quel que soit ».</p></div>
  <div class="f52x-tile" style="--tc:#1d9d80"><h5>Par l'absurde</h5><p>Supposer le contraire et aboutir à une contradiction. Aussi : disjonction de cas.</p></div>
</div>

<div class="f52x-note"><b>Statut des lettres et du signe « = ».</b> Une lettre peut être variable, indéterminée, inconnue ou paramètre — le préciser. Le « = » marque tantôt une identité (toujours vraie), tantôt une équation (vraie ou fausse). En Python, « x = x + 2 » est une affectation (« x reçoit x + 2 »), ni égalité ni équation. Une équation a des solutions, pas des « résultats ».</div>

<div style="margin:6px 0 2px">
  <a href="#" onclick="event.preventDefault();openModal('f21')" class="f52x-pill">F21 · Algorithmique</a>
  <a href="#" onclick="event.preventDefault();openModal('f17')" class="f52x-pill">F17 · Automatismes</a>
</div>

<div class="al gn" style="margin-top:10px">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div style="font-size:13px">
    Conseil terrain. Pas de cours « théorie des ensembles » ni « logique » : on introduit chaque symbole ou notion la première fois qu'il sert (∈ pour situer un nombre, ∩/∪ pour croiser deux événements, ∅ quand une équation n'a pas de solution, le contre-exemple pour infirmer). Laisser les élèves raisonner à l'oral et à l'écrit sans craindre l'erreur, et distinguer recherche et rédaction d'une preuve. Après plusieurs rencontres en situation, une trace écrite de synthèse dans un espace dédié du cahier. La rigueur se construit sur les trois années.
  </div>
</div>
`},

'f21':{n:'F21',t:'Algorithmique et programmation en Bac Pro et CAP',s:'Développer la pensée algorithmique — Python, par imprégnation dans les autres modules',b:`
<style>
  .f53x-h{margin:15px 0 5px;font-size:13.5px;font-weight:800;color:var(--tdark,#3a2a31)}
  .f53x-grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:9px;margin:8px 0}
  .f53x-card{border-radius:12px;overflow:hidden;background:#fff;border:1px solid var(--slight,#eadfe4);box-shadow:0 2px 8px rgba(181,64,112,.08)}
  .f53x-head{padding:9px 11px;color:#fff;font-weight:800;font-size:12px;display:flex;align-items:center;gap:6px}
  .f53x-body{padding:9px 11px;font-size:11.6px;line-height:1.45;color:var(--tmid,#555)}
  .f53x-pink .f53x-head{background:linear-gradient(135deg,#b54070,#d4789a)}
  .f53x-blue .f53x-head{background:linear-gradient(135deg,#4386b8,#75afd6)}
  .f53x-green .f53x-head{background:linear-gradient(135deg,#1d9d80,#4ec4a4)}
  .f53x-tiles{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:8px;margin:8px 0}
  .f53x-tile{border:1px solid var(--slight,#eadfe4);border-left:3px solid var(--tc,#b54070);border-radius:8px;padding:8px 10px;background:#fff;transition:transform .2s ease,box-shadow .2s ease}
  .f53x-tile:hover{transform:translateY(-2px);box-shadow:0 6px 14px rgba(0,0,0,.12)}
  .f53x-tile h5{margin:0 0 2px;font-size:12.5px;color:var(--tdark,#3a2a31)}
  .f53x-tile p{margin:0;font-size:11.4px;line-height:1.4;color:var(--tmid,#555)}
  .f53x-tile code{background:#f3f3f5;padding:0 4px;border-radius:3px;font-size:11px}
  .f53x-prog{display:flex;align-items:stretch;gap:6px;margin:8px 0;flex-wrap:wrap}
  .f53x-step{flex:1 1 150px;border:1px solid var(--slight,#eadfe4);border-radius:9px;padding:9px 11px;background:#fff;font-size:11.6px;line-height:1.42;color:var(--tmid,#555)}
  .f53x-step code{background:#f3f3f5;padding:0 4px;border-radius:3px;font-size:10.5px}
  .f53x-yr{display:inline-block;color:#fff;font-weight:800;font-size:11px;padding:2px 10px;border-radius:20px;margin-bottom:5px}
  .f53x-arrow{display:flex;align-items:center;color:#c8b9c2;font-size:18px;font-weight:700}
  .f53x-warn{border-radius:9px;background:rgba(232,130,10,.09);border:1px solid rgba(232,130,10,.32);padding:9px 12px;font-size:12px;line-height:1.55;margin:8px 0;color:var(--tmid,#555)}
  .f53x-warn b{color:#b56a08}
  .f53x-pill{display:inline-flex;align-items:center;gap:5px;padding:5px 11px;background:#fbeaf0;border:1.5px solid #b54070;border-radius:20px;font-size:11.5px;color:#7a1f45;text-decoration:none;font-weight:600;margin:4px 5px 2px 0}
  @media(max-width:620px){.f53x-grid3{grid-template-columns:1fr}.f53x-arrow{display:none}}
</style>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
    Un module transversal, sur les trois années de Bac Pro
  </h3>
  <p style="font-size:13px">Module transversal de maths commun aux trois années, présent dans tous les domaines. Pas de cours dédié : on part d'un problème à résoudre. Ce n'est ni la maîtrise d'un langage ni la virtuosité qui sont visées, mais la pensée algorithmique.</p>
</div>

<div class="f53x-h">Conditions et boucles, l'idée en un schéma</div>
<svg width="100%" viewBox="0 0 680 222" xmlns="http://www.w3.org/2000/svg" style="font-family:inherit;display:block">
  <defs><marker id="f53arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto"><path d="M2 1L8 5L2 9" fill="none" stroke="#9aa3ad" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></marker></defs>
  <rect x="245" y="18" width="110" height="32" rx="8" fill="#f3f1ec" stroke="#b9b4ab" stroke-width="1.2"/>
  <text x="300" y="38" text-anchor="middle" font-size="12.5" font-weight="700" fill="#555">i = 0</text>
  <line x1="300" y1="50" x2="300" y2="64" stroke="#9aa3ad" stroke-width="1.6" marker-end="url(#f53arr)"/>
  <polygon points="300,66 372,92 300,118 228,92" fill="#eef4fb" stroke="#4a80c0" stroke-width="1.3"/>
  <text x="300" y="89" text-anchor="middle" font-size="12" font-weight="700" fill="#2f5d92">i &lt; n ?</text>
  <text x="300" y="103" text-anchor="middle" font-size="10" fill="#5a7aa6">condition</text>
  <line x1="372" y1="92" x2="416" y2="92" stroke="#9aa3ad" stroke-width="1.6" marker-end="url(#f53arr)"/>
  <text x="394" y="84" text-anchor="middle" font-size="10.5" fill="#888">faux</text>
  <rect x="420" y="76" width="72" height="32" rx="8" fill="#eaf6f1" stroke="#1d9d80" stroke-width="1.3"/>
  <text x="456" y="96" text-anchor="middle" font-size="12.5" font-weight="700" fill="#147a61">fin</text>
  <line x1="300" y1="118" x2="300" y2="150" stroke="#9aa3ad" stroke-width="1.6" marker-end="url(#f53arr)"/>
  <text x="314" y="138" text-anchor="middle" font-size="10.5" fill="#888">vrai</text>
  <rect x="230" y="152" width="140" height="44" rx="8" fill="#fbeaf0" stroke="#b54070" stroke-width="1.3"/>
  <text x="300" y="170" text-anchor="middle" font-size="12" font-weight="700" fill="#8a2f54">traitement</text>
  <text x="300" y="186" text-anchor="middle" font-size="11" fill="#a85a78">puis i = i + 1</text>
  <path d="M230 174 L150 174 L150 92 L226 92" fill="none" stroke="#9aa3ad" stroke-width="1.6" marker-end="url(#f53arr)"/>
  <text x="98" y="137" text-anchor="middle" font-size="10.5" fill="#888">on répète</text>
  <text x="340" y="216" text-anchor="middle" font-size="11.5" fill="#8a8a8a">Tant que la condition est vraie, on répète (boucle for / while). if · elif · else = on choisit selon la condition.</text>
</svg>

<div class="f53x-h">Du pseudo-code à Python</div>
<div class="f53x-grid3">
  <div class="f53x-card f53x-pink"><div class="f53x-head">1 · Pseudo-code</div><div class="f53x-body">Écrire l'algorithme en se libérant de la syntaxe. La flèche ← se lit « reçoit ».</div></div>
  <div class="f53x-card f53x-blue"><div class="f53x-head">2 · Algorigramme</div><div class="f53x-body">Visualiser les étapes (organigramme). Utile, sans imposer de norme.</div></div>
  <div class="f53x-card f53x-green"><div class="f53x-head">3 · Python</div><div class="f53x-body">Langage interprété, gratuit : EduPython, Spyder, ou Capytale en ligne.</div></div>
</div>

<div class="f53x-h">Les fondamentaux, installés dès la seconde</div>
<div class="f53x-tiles">
  <div class="f53x-tile" style="--tc:#b54070"><h5>Variables &amp; types</h5><p><code>int</code>, <code>float</code>, <code>str</code>, booléens (<code>True</code>/<code>False</code>).</p></div>
  <div class="f53x-tile" style="--tc:#4a80c0"><h5>Affectation</h5><p><code>a = 5</code> se lit « a reçoit 5 ».</p></div>
  <div class="f53x-tile" style="--tc:#1d9d80"><h5>Conditions</h5><p><code>if</code> / <code>elif</code> / <code>else</code>, opérateurs et <code>and</code>/<code>or</code>/<code>not</code>.</p></div>
  <div class="f53x-tile" style="--tc:#e8820a"><h5>Boucles</h5><p>Bornées (<code>for</code>) et non bornées (<code>while</code>).</p></div>
  <div class="f53x-tile" style="--tc:#7a5bbf"><h5>Fonctions</h5><p><code>def</code>, arguments, <code>return</code> (« renvoie »).</p></div>
</div>

<div class="f53x-h">Et ça ne s'arrête pas à la seconde : la montée sur le cycle</div>
<div class="f53x-prog">
  <div class="f53x-step"><span class="f53x-yr" style="background:#b54070">2de</span><div>Les fondamentaux : variables, affectation, conditions, boucles <code>for</code>/<code>while</code>, fonctions — en consolidation du collège.</div></div>
  <div class="f53x-arrow">&rarr;</div>
  <div class="f53x-step"><span class="f53x-yr" style="background:#4a80c0">1re</span><div>On introduit les <b>listes</b> (créer, parcourir, ajouter des éléments). Les fonctions servent à résoudre un problème (entête souvent fourni) : suites, simulation de probabilités.</div></div>
  <div class="f53x-arrow">&rarr;</div>
  <div class="f53x-step"><span class="f53x-yr" style="background:#1d9d80">Tle</span><div>Pas de notion nouvelle : on vise la <b>programmation modulaire</b> — découper un problème en fonctions —, réinvestie dans tous les modules.</div></div>
</div>

<div class="f53x-warn"><b>Trois pièges à connaître.</b> ① L'affectation n'est pas une égalité : <code style="background:#f3f3f5;padding:0 4px;border-radius:3px">a = a + 1</code> ajoute 1 ; pour tester l'égalité, on utilise ==. ② Les flottants : ne jamais tester l'égalité de deux nombres à virgule (d'où les triplets pythagoriciens, entiers, en géométrie). ③ L'indentation et la casse : une boucle <code style="background:#f3f3f5;padding:0 4px;border-radius:3px">while</code> mal indentée ou sans condition d'arrêt devient infinie.</div>

<div class="al gn" style="margin-top:10px">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div style="font-size:13px">
    <b>Conseil terrain — Bac Pro (Python).</b> Pas de « cours d'informatique » : on part d'un problème mathématique concret (le jeu du 7, un encadrement par balayage, une comparaison de prix) et on introduit variables, conditions, boucles et fonctions au fil de l'eau, en Python. Privilégier les fonctions (<code>def</code> … <code>return</code>) à l'affichage <code>print</code>. En 1re, les listes prolongent naturellement les suites ; en Tle, on découpe les problèmes en fonctions. Trois réflexes à installer : lire « = » comme « reçoit », ne jamais tester l'égalité de deux flottants, surveiller l'indentation. La maîtrise du langage n'est pas un attendu : viser la démarche.
  </div>
</div>

<div class="f53x-h" style="display:flex;align-items:center;gap:7px;margin-top:16px">
  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#e8820a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"/></svg>
  Et en CAP&nbsp;?
</div>
<div style="border-radius:9px;background:rgba(232,130,10,.09);border:1px solid rgba(232,130,10,.3);border-left:3px solid #e8820a;padding:9px 12px;font-size:12px;line-height:1.5;margin:8px 0;color:var(--tmid,#555)">
  En CAP, l'algorithmique est l'un des <b style="color:#b56a08">deux modules transversaux</b> de maths, avec les <b style="color:#b56a08">Automatismes</b> (→ <a href="#" onclick="event.preventDefault();openModal('f17')" style="color:#147a61;font-weight:600">F17</a>). Pas de cours dédié : on les travaille lors de l'étude des différents domaines. <b style="color:#b56a08">Différence clé avec le Bac Pro</b> : on programme en <b style="color:#b56a08">langage visuel</b> (type Scratch), dans la continuité du collège — pas en Python.
</div>
<div class="f53x-tiles">
  <div class="f53x-tile" style="--tc:#e8820a"><h5>Langage visuel</h5><p>Continuité du collège : on assemble des blocs, sans syntaxe à maîtriser. On ne vise pas une connaissance experte d'un logiciel.</p></div>
  <div class="f53x-tile" style="--tc:#4a80c0"><h5>Démarche de projet</h5><p>Décomposer un problème en sous-problèmes confiés à des groupes d'élèves qui collaborent.</p></div>
  <div class="f53x-tile" style="--tc:#1d9d80"><h5>Mêmes fondamentaux</h5><p>Variable, principe d'entrée-sortie, instructions conditionnelles, boucles — consolidés, ancrés dans la PC, le pro ou la vie courante.</p></div>
  <div class="f53x-tile" style="--tc:#b54070"><h5>Capacités visées</h5><p>Décomposer un problème ; écrire une séquence d'instructions ; écrire, tester, corriger et exécuter un programme.</p></div>
</div>

<div class="al gn" style="margin-top:10px">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div style="font-size:13px">
    <b>Conseil terrain — CAP (langage visuel).</b> Pas de syntaxe à corriger : tout l'enjeu pédagogique est dans la décomposition du problème et sa verbalisation. Partir d'un projet concret ancré dans le métier (capteur, séquence d'actions, calcul de prix), le découper collectivement en sous-problèmes confiés à des petits groupes, puis assembler les solutions en classe. Les mêmes fondamentaux qu'au Bac Pro restent visés sur le fond (variable, entrée-sortie, condition, boucle) mais jamais via Python : le langage visuel (type Scratch) suffit à installer la pensée algorithmique attendue en CAP.
  </div>
</div>

<div style="margin:6px 0 2px">
  <a href="#" onclick="event.preventDefault();openModal('f20')" class="f53x-pill">F20 · Vocabulaire ensembliste</a>
  <a href="#" onclick="event.preventDefault();openModal('f19')" class="f53x-pill">F19 · Électricité</a>
  <a href="#" onclick="event.preventDefault();openModal('f17')" class="f53x-pill">F17 · Automatismes</a>
</div>
`},

'f22':{n:'F22',t:'La co-intervention',s:'Cours co-animés avec un professeur de l\'enseignement professionnel',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    Définition
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    La co-intervention associe <strong>un enseignant de MPC et un enseignant de spécialité professionnelle</strong> dans le même espace et au même moment. Ce dispositif démarre dès la <strong>1re année de CAP et la 2nde Bac Pro</strong>. Il ne s'agit pas d'un cours supplémentaire : la co-intervention s'intègre pleinement dans la progression annuelle de chaque discipline.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    Horaires réglementaires
  </h3>
  <div class="g2">
    <div style="border:1.5px solid #378add;border-radius:12px;overflow:hidden">
      <div style="background:#378add;padding:10px 14px;display:flex;align-items:center;gap:10px">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        <div>
          <div style="font-weight:700;font-size:13.5px;color:#fff">CAP</div>
          <div style="font-size:11px;color:rgba(255,255,255,.85)">Certificat d'aptitude professionnelle</div>
        </div>
      </div>
      <div style="padding:12px 16px">
        <ul style="margin:0;padding:0;list-style:none;font-size:13px;line-height:1.9;color:inherit">
          <li style="display:flex;gap:8px;align-items:baseline"><span style="color:#378add;font-size:10px">▶</span><span>1ère année : <strong>43,5 h</strong>, mathématiques ↔ enseignement professionnel</span></li>
          <li style="display:flex;gap:8px;align-items:baseline"><span style="color:#378add;font-size:10px">▶</span><span>2ème année : <strong>39 h</strong>, mathématiques ↔ enseignement professionnel</span></li>
        </ul>
      </div>
    </div>
    <div style="border:1.5px solid #b54070;border-radius:12px;overflow:hidden">
      <div style="background:#b54070;padding:10px 14px;display:flex;align-items:center;gap:10px">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        <div>
          <div style="font-weight:700;font-size:13.5px;color:#fff">Baccalauréat professionnel</div>
          <div style="font-size:11px;color:rgba(255,255,255,.85)">Mathématiques et physique-chimie</div>
        </div>
      </div>
      <div style="padding:12px 16px">
        <ul style="margin:0;padding:0;list-style:none;font-size:13px;line-height:1.9;color:inherit">
          <li style="display:flex;gap:8px;align-items:baseline"><span style="color:#b54070;font-size:10px">▶</span><span>Seconde : <strong>15 h</strong>, mathématiques - physique-chimie ↔ enseignements professionnels</span></li>
          <li style="display:flex;gap:8px;align-items:baseline"><span style="color:#b54070;font-size:10px">▶</span><span>Première : <strong>14 h</strong>, mathématiques - physique-chimie ↔ enseignements professionnels</span></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    Les 3 caractéristiques de la co-intervention
  </h3>
  <style>
    .coint{transition:transform .26s cubic-bezier(.34,1.56,.64,1),box-shadow .22s ease;cursor:default;border-radius:10px;overflow:hidden}
    .coint:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.18)}
    .etape{transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .2s ease;cursor:default;border-radius:8px}
    .etape:hover{transform:translateX(6px);box-shadow:4px 6px 18px rgba(0,0,0,.14)}
    .f17c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f17c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f17c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f17c:hover::before{opacity:1}
  </style>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
    <div class="coint" style="display:flex;align-items:stretch;gap:0;border:1.5px solid #b54070">
      <div style="background:#b54070;width:14px;flex-shrink:0"></div>
      <div style="padding:12px 16px;flex:1">
        <div style="font-weight:800;font-size:13px;color:#b54070;margin-bottom:4px">Modalité pédagogique</div>
        <p style="font-size:12.5px;color:#444;line-height:1.55;margin:0">Mise en œuvre des programmes de mathématiques – physique-chimie <strong>et</strong> d'enseignement professionnel simultanément.</p>
      </div>
    </div>
    <div class="coint" style="display:flex;align-items:stretch;gap:0;border:1.5px solid #7a50b8">
      <div style="background:#7a50b8;width:14px;flex-shrink:0"></div>
      <div style="padding:12px 16px;flex:1">
        <div style="font-weight:800;font-size:13px;color:#7a50b8;margin-bottom:4px">Inscrite dans la progression annuelle</div>
        <p style="font-size:12.5px;color:#444;line-height:1.55;margin:0">La co-intervention s'intègre dans la <strong>progression annuelle de l'enseignant de MPC</strong>, ce n'est pas un dispositif à part.</p>
      </div>
    </div>
    <div class="coint" style="display:flex;align-items:stretch;gap:0;border:1.5px solid #4a80c0">
      <div style="background:#4a80c0;width:14px;flex-shrink:0"></div>
      <div style="padding:12px 16px;flex:1">
        <div style="font-weight:800;font-size:13px;color:#4a80c0;margin-bottom:4px">Développe des compétences disciplinaires</div>
        <p style="font-size:12.5px;color:#444;line-height:1.55;margin:0">Dans un projet commun centré sur une <strong>situation professionnelle</strong> issue du référentiel des activités professionnelles.</p>
      </div>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    L'aspect didactique — deux entrées disciplinaires
  </h3>
  <div class="g2">
    <div class="f17c bx" style="background:transparent;border:1.5px solid #b54070;border-left:3px solid #b54070;--bar:#b54070"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="2"/><line x1="8" y1="6" x2="8" y2="10"/><line x1="6" y1="8" x2="10" y2="8"/><line x1="14" y1="6" x2="18" y2="6"/><line x1="14" y1="10" x2="18" y2="10"/><line x1="6" y1="14" x2="10" y2="14"/><line x1="6" y1="18" x2="10" y2="18"/><line x1="14" y1="14" x2="18" y2="14"/><line x1="14" y1="18" x2="18" y2="18"/></svg> En Mathématiques</strong>L'activité professionnelle choisie fournit une situation contextualisée qui utilise ou fait apparaître des notions mathématiques inscrites au programme.</div>
    <div class="f17c bx" style="background:transparent;border:1.5px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 3v5l-4 8a2 2 0 0 0 1.8 3h8.4a2 2 0 0 0 1.8-3l-4-8V3"/><line x1="8" y1="16" x2="16" y2="16"/></svg> En Physique-Chimie</strong>La situation concrète issue du référentiel illustre ou met en application un phénomène ou une notion du programme de PC de la section.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    5 étapes pour préparer une séance de co-intervention
  </h3>
  <div style="display:flex;flex-direction:column;gap:7px;margin-bottom:12px">
    <div class="etape" style="display:flex;align-items:center;gap:12px;background:#fce8f2;padding:10px 14px">
      <div style="background:#b54070;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;flex-shrink:0">1</div>
      <p style="font-size:12.5px;color:#333;line-height:1.5;margin:0"><strong>Prendre appui sur un contexte professionnel</strong> : problématique ou situation issue du référentiel.</p>
    </div>
    <div class="etape" style="display:flex;align-items:center;gap:12px;background:#fdf4e8;padding:10px 14px">
      <div style="background:#e8820a;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;flex-shrink:0">2</div>
      <p style="font-size:12.5px;color:#333;line-height:1.5;margin:0"><strong>Fixer un objectif clair et partagé</strong> entre les deux enseignants.</p>
    </div>
    <div class="etape" style="display:flex;align-items:center;gap:12px;background:#e8f5e8;padding:10px 14px">
      <div style="background:#3aaa5a;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;flex-shrink:0">3</div>
      <p style="font-size:12.5px;color:#333;line-height:1.5;margin:0"><strong>Définir le rôle de chacun</strong> en veillant à leur équilibre tout au long de la séance.</p>
    </div>
    <div class="etape" style="display:flex;align-items:center;gap:12px;background:#e8f0fa;padding:10px 14px">
      <div style="background:#4a80c0;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;flex-shrink:0">4</div>
      <p style="font-size:12.5px;color:#333;line-height:1.5;margin:0"><strong>Définir les interventions</strong> de chaque enseignant dans le déroulé de la séance.</p>
    </div>
    <div class="etape" style="display:flex;align-items:center;gap:12px;background:#f0e8fa;padding:10px 14px">
      <div style="background:#7a50b8;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:12px;flex-shrink:0">5</div>
      <p style="font-size:12.5px;color:#333;line-height:1.5;margin:0"><strong>Croiser les référentiels et les programmes</strong> et construire à deux le projet de co-intervention.</p>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Ressource
  </h3>
  <div style="display:flex;flex-wrap:nowrap;gap:8px;margin-top:4px">
    <a href="https://eduscol.education.fr/document/1911/download" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Vadémécum — Mettre en œuvre la co-intervention (Éduscol)
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Si la co-intervention est nouvelle pour vous, commencez par observer comment votre collègue de spécialité présente les situations professionnelles, vous repérerez naturellement les points d'accroche MPC. Une séance courte et bien préparée ensemble vaut mieux qu'un programme ambitieux qui part en improvisation. Et si la relation prend du temps à trouver son rythme, c'est normal la co-intervention ça se construit progressivement.
  </div>
</div>
`},

'f23':{n:'F23',t:'L\'accompagnement renforcé en CAP',s:'Consolidation, accompagnement personnalisé, orientation',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    L'accompagnement renforcé — 3 volets
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    L'accompagnement renforcé en CAP couvre l'ensemble du cycle en 3 volets complémentaires : <strong>consolidation des acquis, accompagnement personnalisé et accompagnement à l'orientation</strong>. La consolidation est prioritaire en 1re année, l'orientation en Terminale.
  </div>
  <style>
    .f18c{border-radius:10px;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default}
    .f18c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
  </style>
  <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-top:10px">
    <div class="f18c" style="border:1.5px solid #2aaa8a">
      <div style="background:#2aaa8a;color:#fff;padding:8px 12px;font-weight:800;font-size:12px">Consolidation des acquis<div style="font-size:10px;opacity:.85;margin-top:2px;font-weight:400">Part importante en 1CAP</div></div>
      <div style="background:#e8f8f4;padding:8px 12px;font-size:11.5px;color:#333;line-height:1.5">Renforcer les connaissances en français et mathématiques en lien avec les attendus du cycle 4.</div>
    </div>
    <div class="f18c" style="border:1.5px solid #d44070">
      <div style="background:#d44070;color:#fff;padding:8px 12px;font-weight:800;font-size:12px">Accompagnement personnalisé<div style="font-size:10px;opacity:.85;margin-top:2px;font-weight:400">1CAP → TCAP</div></div>
      <div style="background:#fce8f0;padding:8px 12px;font-size:11.5px;color:#333;line-height:1.5">Développer l'autonomie, des compétences transversales et socio-professionnelles.</div>
    </div>
    <div class="f18c" style="border:1.5px solid #e8820a">
      <div style="background:#e8820a;color:#fff;padding:8px 12px;font-weight:800;font-size:12px">Accompagnement à l'orientation<div style="font-size:10px;opacity:.85;margin-top:2px;font-weight:400">Part importante en TCAP</div></div>
      <div style="background:#fdf4e8;padding:8px 12px;font-size:11.5px;color:#333;line-height:1.5">Construire l'avenir post-CAP : projet professionnel et formations supérieures.</div>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    3 étapes de la consolidation des acquis
  </h3>
  <div style="display:flex;gap:8px;margin-bottom:10px">
    <div style="flex:1;background:#e8f0fa;border:1.5px solid #4a80c0;border-radius:10px;padding:10px 12px;text-align:center">
      <div style="font-size:18px;margin-bottom:4px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2a60a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg></div>
      <div style="font-size:12px;font-weight:800;color:#2a60a0;margin-bottom:3px">① Diagnostiquer</div>
      <div style="font-size:11px;color:#555;line-height:1.45">Évaluation individualisée des acquis.</div>
    </div>
    <div style="flex:0;align-self:center;font-size:18px;color:#ccc">→</div>
    <div style="flex:1;background:#fff8e8;border:1.5px solid #e8a820;border-radius:10px;padding:10px 12px;text-align:center">
      <div style="font-size:18px;margin-bottom:4px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c07010" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><line x1="8" y1="12" x2="16" y2="12"/><line x1="8" y1="16" x2="14" y2="16"/></svg></div>
      <div style="font-size:12px;font-weight:800;color:#c07010;margin-bottom:3px">② Exploiter les tests</div>
      <div style="font-size:11px;color:#555;line-height:1.45">Tests de positionnement nationaux comme point de départ.</div>
    </div>
    <div style="flex:0;align-self:center;font-size:18px;color:#ccc">→</div>
    <div style="flex:1;background:#fce8f0;border:1.5px solid #d44070;border-radius:10px;padding:10px 12px;text-align:center">
      <div style="font-size:18px;margin-bottom:4px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b02050" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
      <div style="font-size:12px;font-weight:800;color:#b02050;margin-bottom:3px">③ Renforcer</div>
      <div style="font-size:11px;color:#555;line-height:1.45">Travailler connaissances et compétences en français et mathématiques.</div>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Ressources
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="https://eduscol.education.fr/document/1911/download" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;transition:background .2s">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Vadémécum CA &amp; AP — Éduscol
    </a>
    <a href="https://www.pedagogie.ac-aix-marseille.fr/jcms/c_10762489/fr/consolidation-des-acquis-en-lycee-professionnel" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;transition:background .2s">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Consolidation LP — Ac. Aix-Marseille
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    En début de 1re année, <strong>exploitez les tests de positionnement</strong> : ils donnent une photographie rapide des acquis en français et en mathématiques et permettent de cibler les séances sur les lacunes réelles. En Terminale, intégrez l'orientation même dans les séances disciplinaires ou une question contextualisée dans le secteur professionnel peut amorcer une réflexion sur l'après-CAP.
  </div>
</div>
`},

'f24':{n:'F24',t:'Le chef-d\'œuvre en CAP',s:'Réalisation pluridisciplinaire ambitieuse ancrée dans la spécialité',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    Définition
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Le chef-d'œuvre est la réalisation complexe et concrète d'un <strong>projet pluridisciplinaire ambitieux ancré dans la spécialité professionnelle</strong> de l'élève. Il <strong>systématise et incarne la pédagogie de projet</strong> dans l'enseignement professionnel et concerne <strong>tous les élèves de CAP</strong> sur le cycle de formation.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    Cycle du chef-d'œuvre
  </h3>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 680 170" style="overflow:visible;display:block;margin:8px 0" role="img">
    <title>Cycle du chef-d'œuvre en CAP</title>
    <style>
      .cdo{transition:transform .26s cubic-bezier(.34,1.56,.64,1),filter .22s ease;transform-box:fill-box;transform-origin:center;cursor:default}
      .cdo:hover{transform:translateY(-5px);filter:drop-shadow(0 8px 18px rgba(0,0,0,.22))}
      .ct{font-family:'Nunito',sans-serif;font-size:10px;text-anchor:middle}
      .ch{font-family:'Playfair Display',serif;font-size:11px;font-weight:700;text-anchor:middle}
    </style>
    <g class="cdo">
      <rect x="4" y="10" width="122" height="148" rx="12" fill="#fce8f2" stroke="#d4789a" stroke-width="1.2"/>
      <rect x="4" y="10" width="122" height="32" rx="12" fill="#b54070"/>
      <rect x="4" y="30" width="122" height="12" fill="#b54070"/>
      <text x="65" y="22" class="ch" fill="#fff">① Choisir</text>
      <text x="65" y="35" class="ch" fill="#fff" font-size="9">le projet</text>
      <text x="65" y="62" class="ct" fill="#5a1a30">Projet choisi</text>
      <text x="65" y="76" class="ct" fill="#5a1a30">collectivement avec</text>
      <text x="65" y="90" class="ct" fill="#5a1a30">l'équipe péda.</text>
      <text x="65" y="104" class="ct" fill="#5a1a30">et les élèves.</text>
      <line x1="16" y1="116" x2="114" y2="116" stroke="#d4789a" stroke-width="0.6" opacity="0.5"/>
      <text x="65" y="130" class="ct" font-weight="700" fill="#b54070">Ancré dans</text>
      <text x="65" y="144" class="ct" font-weight="700" fill="#b54070">la spécialité</text>
    </g>
    <text x="138" y="92" text-anchor="middle" font-size="18" fill="#b54070">→</text>
    <g class="cdo">
      <rect x="150" y="10" width="122" height="148" rx="12" fill="#fbf0c8" stroke="#e4c870" stroke-width="1.2"/>
      <rect x="150" y="10" width="122" height="32" rx="12" fill="#c98a30"/>
      <rect x="150" y="30" width="122" height="12" fill="#c98a30"/>
      <text x="211" y="22" class="ch" fill="#fff">② Planifier</text>
      <text x="211" y="35" class="ch" fill="#fff" font-size="9">sur le cycle</text>
      <text x="211" y="62" class="ct" fill="#5a3a08">Répartition des</text>
      <text x="211" y="76" class="ct" fill="#5a3a08">tâches, jalons,</text>
      <text x="211" y="90" class="ct" fill="#5a3a08">étapes clés.</text>
      <text x="211" y="104" class="ct" fill="#5a3a08">Individuel ou collectif.</text>
      <line x1="162" y1="116" x2="260" y2="116" stroke="#e4c870" stroke-width="0.6" opacity="0.5"/>
      <text x="211" y="130" class="ct" font-weight="700" fill="#c98a30">Retours réguliers</text>
      <text x="211" y="144" class="ct" font-weight="700" fill="#c98a30">sur l'avancement</text>
    </g>
    <text x="284" y="92" text-anchor="middle" font-size="18" fill="#c98a30">→</text>
    <g class="cdo">
      <rect x="296" y="10" width="122" height="148" rx="12" fill="#dff0e8" stroke="#a0ddd0" stroke-width="1.2"/>
      <rect x="296" y="10" width="122" height="32" rx="12" fill="#1d9d80"/>
      <rect x="296" y="30" width="122" height="12" fill="#1d9d80"/>
      <text x="357" y="22" class="ch" fill="#fff">③ Réaliser</text>
      <text x="357" y="35" class="ch" fill="#fff" font-size="9">le projet</text>
      <text x="357" y="62" class="ct" fill="#0a3a2a">Compétences MPC</text>
      <text x="357" y="76" class="ct" fill="#0a3a2a">mobilisées selon</text>
      <text x="357" y="90" class="ct" fill="#0a3a2a">les besoins</text>
      <text x="357" y="104" class="ct" fill="#0a3a2a">du projet.</text>
      <line x1="308" y1="116" x2="406" y2="116" stroke="#a0ddd0" stroke-width="0.6" opacity="0.5"/>
      <text x="357" y="130" class="ct" font-weight="700" fill="#1d9d80">Résultat matériel</text>
      <text x="357" y="144" class="ct" font-weight="700" fill="#1d9d80">ou immatériel</text>
    </g>
    <text x="430" y="92" text-anchor="middle" font-size="18" fill="#1d9d80">→</text>
    <g class="cdo">
      <rect x="442" y="10" width="122" height="148" rx="12" fill="#ede4f7" stroke="#c4a8ea" stroke-width="1.2"/>
      <rect x="442" y="10" width="122" height="32" rx="12" fill="#7a5bb5"/>
      <rect x="442" y="30" width="122" height="12" fill="#7a5bb5"/>
      <text x="503" y="22" class="ch" fill="#fff">④ Présenter</text>
      <text x="503" y="35" class="ch" fill="#fff" font-size="9">et valoriser</text>
      <text x="503" y="62" class="ct" fill="#3a1a6a">Oral de présentation,</text>
      <text x="503" y="76" class="ct" fill="#3a1a6a">jury, rapport</text>
      <text x="503" y="90" class="ct" fill="#3a1a6a">ou exposition.</text>
      <text x="503" y="104" class="ct" fill="#3a1a6a">Contribution personnelle.</text>
      <line x1="454" y1="116" x2="552" y2="116" stroke="#c4a8ea" stroke-width="0.6" opacity="0.5"/>
      <text x="503" y="130" class="ct" font-weight="700" fill="#7a5bb5">Valorise le parcours</text>
      <text x="503" y="144" class="ct" font-weight="700" fill="#7a5bb5">auprès des recruteurs</text>
    </g>
    <text x="576" y="92" text-anchor="middle" font-size="18" fill="#7a5bb5">→</text>
    <g class="cdo">
      <rect x="588" y="10" width="88" height="148" rx="12" fill="#fff3e0" stroke="#ffb870" stroke-width="1.2"/>
      <rect x="588" y="10" width="88" height="32" rx="12" fill="#d46030"/>
      <rect x="588" y="30" width="88" height="12" fill="#d46030"/>
      <text x="632" y="22" class="ch" fill="#fff">⑤ Évaluer</text>
      <text x="632" y="35" class="ch" fill="#fff" font-size="9">certifier</text>
      <text x="632" y="62" class="ct" fill="#5a2a08">Part individuelle</text>
      <text x="632" y="76" class="ct" fill="#5a2a08">et collective</text>
      <text x="632" y="90" class="ct" fill="#5a2a08">valorisées</text>
      <text x="632" y="104" class="ct" fill="#5a2a08">séparément.</text>
      <line x1="600" y1="116" x2="664" y2="116" stroke="#ffb870" stroke-width="0.6" opacity="0.5"/>
      <text x="632" y="130" class="ct" font-weight="700" fill="#d46030">Excellence</text>
      <text x="632" y="144" class="ct" font-weight="700" fill="#d46030">professionnelle</text>
    </g>
  </svg>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
    Rôle des MPC dans le chef-d'œuvre
  </h3>
  <style>
    .f19c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f19c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f19c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f19c:hover::before{opacity:1}
  </style>
  <div class="g2">
    <div class="f19c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 12 11 14 15 10"/></svg> Contribution MPC naturelle</strong>Mathématiques et physique-chimie interviennent à la hauteur des besoins du projet : calculs de dimensions, énergétique, modélisation, traitement de données…</div>
    <div class="f19c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 11H9l-2-2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3l2 2h6l2-2h3a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1"/><path d="M9 11V7a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"/></svg> Travail en équipe pédagogique</strong>Le chef-d'œuvre est co-construit avec les enseignants de spécialité. Le professeur MPC apporte ses contenus disciplinaires là où ils font sens pour le projet.</div>
    <div class="f19c bx" style="background:transparent;border:1px solid #7a5bb5;border-left:3px solid #7a5bb5;--bar:#7a5bb5"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg> Trace écrite et oral</strong>Le chef-d'œuvre est aussi une occasion de travailler la maîtrise de la langue (rapport écrit, présentation orale, argumentation scientifique).</div>
    <div class="f19c bx" style="background:transparent;border:1px solid #e8820a;border-left:3px solid #e8820a;--bar:#e8820a"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Pas un projet isolé</strong>Éviter de proposer un projet MPC déconnecté de la spécialité. L'ancrage professionnel est la condition d'adhésion des élèves.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Ressources
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="https://maths-physique-chimie-medias.discipline.ac-lille.fr/docs/2026/VDM_CO.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;transition:background .2s">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Vade-mecum chef-d'œuvre — Éduscol (PDF)
    </a>
    <a href="https://pedagogie.ac-lille.fr/maths-physique-chimie/chef-doeuvre/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;transition:background .2s">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Chef-d'œuvre MPC — Ac. Lille
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Si vous ne savez pas encore quel chef-d'œuvre est prévu pour vos classes, demandez à votre DDFPT ou à un collègue le plus tôt possible. Plus vous identifiez tôt les besoins MPC du projet, plus vos séances pourront s'y articuler naturellement. Et si les apports disciplinaires arrivent trop tard, ce n'est pas grave : même a posteriori, les élèves sentent la cohérence quand elle existe.
  </div>
</div>
`},

'f25':{n:'F25',t:'Le soutien au parcours en Bac Pro',s:'Démarche d\'accompagnement sur le cycle — 97 h sur 3 ans',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    Définition
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Le soutien au parcours désigne la <strong>démarche d'accompagnement</strong> qui permet à l'élève de <strong>sécuriser son parcours</strong> et d'affiner son projet scolaire puis professionnel. Dispensé sur l'ensemble du cycle baccalauréat professionnel, pour tous les élèves, il repose sur une <strong>logique de progressivité</strong> (consolider, approfondir, préparer) et se concrétise en Terminale par le <strong>parcours personnalisé de 2 semaines</strong>.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    Volume horaire et objectifs par niveau — <strong>97 h sur le cycle</strong>
  </h3>
  <style>
    .parc{transition:transform .26s cubic-bezier(.34,1.56,.64,1),box-shadow .22s ease;cursor:default;border-radius:10px;overflow:hidden}
    .parc:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.18)}
    .ol{margin:0;padding-left:14px;font-size:12px;color:#333;line-height:1.65}
    .f20c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f20c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f20c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f20c:hover::before{opacity:1}
  </style>
  <div style="display:flex;flex-direction:column;gap:8px">
    <div class="parc" style="display:flex;align-items:stretch;border:1.5px solid #2aaa8a">
      <div style="background:#2aaa8a;color:#fff;padding:12px 14px;width:190px;flex-shrink:0;display:flex;flex-direction:column;justify-content:center">
        <div style="font-size:10px;font-weight:600;opacity:.8;letter-spacing:.5px;text-transform:uppercase;margin-bottom:3px">Seconde pro</div>
        <div style="font-weight:800;font-size:15px">CONSOLIDER</div>
        <div style="margin-top:6px;font-size:20px;font-weight:900;line-height:1">30<span style="font-size:11px;font-weight:600">h</span></div>
        <div style="font-size:10px;opacity:.85">1 h / semaine</div>
      </div>
      <div style="background:transparent;padding:12px 14px;flex:1">
        <ul class="ol">
          <li>Appréhender le potentiel d'emploi et la réalité des activités des métiers</li>
          <li>Guider les choix de spécialités en exploitant les PFMP</li>
          <li>Connaître les voies d'accès et spécificités des diplômes d'enseignement supérieur</li>
        </ul>
      </div>
    </div>
    <div class="parc" style="display:flex;align-items:stretch;border:1.5px solid #d44070">
      <div style="background:#d44070;color:#fff;padding:12px 14px;width:190px;flex-shrink:0;display:flex;flex-direction:column;justify-content:center">
        <div style="font-size:10px;font-weight:600;opacity:.8;letter-spacing:.5px;text-transform:uppercase;margin-bottom:3px">Première pro</div>
        <div style="font-weight:800;font-size:15px">APPROFONDIR</div>
        <div style="margin-top:6px;font-size:20px;font-weight:900;line-height:1">28<span style="font-size:11px;font-weight:600">h</span></div>
        <div style="font-size:10px;opacity:.85">1 h / semaine</div>
      </div>
      <div style="background:transparent;padding:12px 14px;flex:1">
        <ul class="ol">
          <li>Poursuivre l'analyse des métiers et de l'emploi (progrès technique, égalité femmes-hommes)</li>
          <li>Réfléchir aux différents parcours : insertion ou poursuite d'études (voie scolaire ou apprentissage)</li>
          <li>Poursuivre la réflexion sur les formations post-bac de la spécialité choisie</li>
        </ul>
      </div>
    </div>
    <div class="parc" style="display:flex;align-items:stretch;border:1.5px solid #e8820a">
      <div style="background:#e8820a;color:#fff;padding:12px 14px;width:190px;flex-shrink:0;display:flex;flex-direction:column;justify-content:center">
        <div style="font-size:10px;font-weight:600;opacity:.8;letter-spacing:.5px;text-transform:uppercase;margin-bottom:3px">Terminale pro</div>
        <div style="font-weight:800;font-size:15px">PRÉPARER</div>
        <div style="margin-top:6px;font-size:20px;font-weight:900;line-height:1">39<span style="font-size:11px;font-weight:600">h</span></div>
        <div style="font-size:10px;opacity:.85">1 h 30 / semaine</div>
      </div>
      <div style="background:transparent;padding:12px 14px;flex:1">
        <ul class="ol">
          <li>Préparer et finaliser le projet : poursuite d'études (supérieur, CS) ou entrée dans le monde du travail</li>
          <li>Préparer et accompagner le choix du parcours personnalisé de 2 semaines</li>
          <li>Préparer la procédure Parcoursup</li>
        </ul>
        <div style="margin-top:7px;background:transparent;border-left:2.5px solid #e8820a;padding:5px 9px;border-radius:0 4px 4px 0;font-size:11px;color:#7a4200;line-height:1.5">Point culminant : le <strong>parcours personnalisé de 2 semaines</strong> (poursuite d'études ou insertion professionnelle). Organisation, répartition et planification relevant de l'autonomie des établissements. <em>Détail complet en F26.</em></div>
      </div>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    Modalités organisationnelles
  </h3>
  <div class="g2">
    <div class="f20c bx" style="background:transparent;font-size:12.5px;border-left:3px solid #1d9d80;--bar:#1d9d80">
      <div style="font-weight:700;color:#1d9d80;margin-bottom:6px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1d9d80" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> C'est…</div>
      <ul style="margin:0;padding-left:14px;line-height:1.8">
        <li>inscrit dans l'emploi du temps des élèves</li>
        <li>inscrit dans le volet orientation du projet d'établissement</li>
        <li>ouvert à toutes les disciplines</li>
        <li>une programmation pédagogique co-construite en équipe (conseil pédagogique)</li>
      </ul>
    </div>
    <div class="f20c bx" style="background:transparent;font-size:12.5px;border-left:3px solid #c0392b;--bar:#c0392b">
      <div style="font-weight:700;color:#c0392b;margin-bottom:6px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c0392b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg> Ce n'est pas…</div>
      <ul style="margin:0;padding-left:14px;line-height:1.8">
        <li>une variable d'ajustement des emplois du temps</li>
        <li>du renforcement disciplinaire</li>
        <li>l'appropriation des heures par une seule discipline</li>
        <li>des partenaires qui font cours à la place de l'enseignant</li>
      </ul>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    Les acteurs
  </h3>
  <div class="g2">
    <div class="f20c bx" style="background:transparent;font-size:12.5px;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070"><strong>Enseignants EG et EP</strong><br>Toutes les disciplines peuvent dispenser ces heures, pas d'appropriation par une seule d'entre elles.</div>
    <div class="f20c bx" style="background:transparent;font-size:12.5px;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong>CPE, Psychologue EN, DDFPT, RBDE</strong><br>Référent décrochage scolaire, référent métiers, représentants de l'enseignement supérieur.</div>
    <div class="f20c bx" style="background:transparent;font-size:12.5px;grid-column:1/-1;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong>Intervenants AvenirPro</strong> Missions locales, France Travail en appui à l'enseignant, non en substitution.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Ressources
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054063222" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Arrêté du 22 avril 2026 — Légifrance
    </a>
    <a href="https://eduscol.education.fr/658/soutien-au-parcours-en-baccalaureat-professionnel" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Soutien au parcours — Éduscol
    </a>
    <a href="https://eduscol.education.fr/4214/avenirpro-et-avenirpro-accompagner-les-lyceens-professionnels-vers-l-emploi" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      AvenirPro et AvenirPro+ — Éduscol
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Les heures de soutien au parcours sont ouvertes à toutes les disciplines, c'est souvent une belle façon d'ancrer les maths ou la physique dans le secteur professionnel des élèves, sans que ça ressemble à un cours supplémentaire. En Terminale, savoir ce que chaque élève envisage, insertion ou poursuite d'études, peut naturellement nourrir le choix de vos exemples et de vos situations au fil de l'année.
  </div>
</div>
`},

'f26':{n:'F26',t:'Le parcours personnalisé en Terminale professionnelle',s:'2 semaines avant mi-mars — poursuite d\'études ou insertion professionnelle',b:`
<div class="s" style="page-break-inside:avoid">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    Principe
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    En Terminale professionnelle, chaque élève bénéficie d'un <strong>parcours personnalisé de 2 semaines</strong> (non nécessairement consécutives), positionné <strong>avant la mi-mars</strong>, en amont de la clôture des vœux Parcoursup. Dès le début de l'année scolaire, chaque élève choisit l'une des deux options via une <strong>fiche de dialogue</strong>, avec l'appui des enseignants et des familles. L'organisation, la répartition et la planification relèvent de l'autonomie de chaque établissement.
  </div>
</div>

<div class="s" style="page-break-inside:avoid">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/></svg>
    Les 2 options du parcours personnalisé
  </h3>
  <style>
    .f21c{border-radius:10px;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default}
    .f21c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
  </style>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px">
    <div class="f21c" style="border:1.5px solid #a0c0e8">
      <div style="background:#4a80c0;color:#fff;padding:9px 14px;display:flex;align-items:center;gap:10px">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
        <div>
          <div style="font-weight:800;font-size:13px">Poursuite d'études</div>
          <div style="font-size:10px;opacity:.8">BTS · CS · Licence pro · …</div>
        </div>
      </div>
      <div style="background:transparent;padding:9px 14px">
        <ul style="margin:0;padding-left:14px;font-size:12px;line-height:1.7;color:#1a3a5a">
          <li>Renforcement méthodologique et disciplinaire ciblé</li>
          <li>Découverte des formations post-bac et de leurs attendus</li>
          <li>Préparation à la procédure Parcoursup</li>
        </ul>
      </div>
    </div>
    <div class="f21c" style="border:1.5px solid #d4789a">
      <div style="background:#b54070;color:#fff;padding:9px 14px;display:flex;align-items:center;gap:10px">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>
        <div>
          <div style="font-weight:800;font-size:13px">Insertion professionnelle</div>
          <div style="font-size:10px;opacity:.8">Entrée directe sur le marché du travail</div>
        </div>
      </div>
      <div style="background:transparent;padding:9px 14px">
        <ul style="margin:0;padding-left:14px;font-size:12px;line-height:1.7;color:#5a1a30">
          <li>2 semaines de PFMP <strong>gratifiées par l'État</strong></li>
          <li>Obligatoirement dans la spécialité professionnelle</li>
          <li>Immersion concrète, préparation à l'entretien pro</li>
        </ul>
      </div>
    </div>
  </div>
  <p style="font-size:12px;color:#444;line-height:1.6;margin:10px 0 0;padding:8px 13px;border-left:3px solid #888">Le choix entre les deux options est formalisé via une fiche de dialogue avec l'élève et sa famille. Il reste <strong>révisable en cours d'année</strong> en fonction de l'évolution du projet et des aspirations de l'élève.</p>
</div>

<div class="s" style="page-break-inside:avoid;page-break-before:avoid">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    Ce que ça change pour l'enseignant de MPC
  </h3>
  <style>
    .f16d{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f16d:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f16d::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f16d:hover::before{opacity:1}
  </style>
  <div class="g2">
    <div class="f16d bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0">
      <strong>Option Poursuite d'études</strong><br>
      <span style="font-size:12px">Vous pouvez être sollicité pour le renforcement disciplinaire. C'est l'occasion de travailler des compétences en MPC directement en lien avec les attendus BTS de la spécialité des élèves.</span>
    </div>
    <div class="f16d bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070">
      <strong>Option Insertion professionnelle</strong><br>
      <span style="font-size:12px">Ce module se déroule principalement en PFMP. Votre rôle est surtout en amont : connaître le choix de vos élèves pour adapter vos exemples et valoriser les MPC dans les gestes professionnels.</span>
    </div>
    <div class="f16d bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80">
      <strong>La fiche de dialogue</strong><br>
      <span style="font-size:12px">Le choix est formalisé dès le 1er trimestre. Vous pouvez être amené à accompagner ou co-valider ce choix avec l'élève et sa famille. Renseignez-vous sur la procédure dans votre établissement.</span>
    </div>
    <div class="f16d bx" style="background:transparent;border:1px solid #e8820a;border-left:3px solid #e8820a;--bar:#e8820a">
      <strong>Calendrier à anticiper</strong><br>
      <span style="font-size:12px">Les 2 semaines sont placées avant mi-mars. L'organisation relève de l'autonomie de l'établissement, renseignez-vous dès la rentrée pour adapter votre progression.</span>
    </div>
  </div>
</div>

<div class="s" style="page-break-inside:avoid">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Ressources
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054063222" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Arrêté du 22 avril 2026 — Légifrance
    </a>
    <a href="https://eduscol.education.fr/3215/le-parcours-personnalise-en-terminale-professionnelle" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Parcours personnalisé en Terminale — Éduscol
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Savoir dès la rentrée de Terminale qui s'oriente vers la poursuite d'études et qui vise l'insertion peut vraiment changer la façon de cibler vos exemples et vos situations. Ce n'est pas toujours simple à obtenir tôt, mais le professeur principal a souvent une idée. N'hésitez pas à lui poser la question. Les deux options ne sont pas incompatibles dans une même classe : les compétences MPC sont utiles dans les deux cas, juste sous des angles différents.
  </div>
</div>
`},

'f27':{n:'F27',t:'Le projet en Bac Pro',s:'Structurer les apprentissages autour d\'un projet mobilisateur',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    Les 3 piliers du projet en Bac Pro
  </h3>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 680 148" style="overflow:visible;display:block;margin:8px 0" role="img">
    <title>Les 3 piliers du projet en Bac Pro</title>
    <style>
      .p17{transition:transform .26s cubic-bezier(.34,1.56,.64,1),filter .22s ease;transform-box:fill-box;transform-origin:center;cursor:default}
      .p17:hover{transform:translateY(-5px);filter:drop-shadow(0 8px 18px rgba(0,0,0,.22))}
    </style>
    <g class="p17">
      <rect x="10" y="10" width="202" height="128" rx="12" fill="#fce8f2" stroke="#d4789a" stroke-width="1.2"/>
      <rect x="10" y="10" width="202" height="34" rx="12" fill="#b54070"/>
      <rect x="10" y="32" width="202" height="12" fill="#b54070"/>
      <text x="111" y="24" text-anchor="middle" font-family="Playfair Display,serif" font-size="12" font-weight="700" fill="#fff">① Un objet mobilisateur</text>
      <text x="111" y="37" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9" fill="rgba(255,255,255,.85)">point d'entrée concret et motivant</text>
      <text x="111" y="60" text-anchor="middle" font-family="Nunito,sans-serif" font-size="10.5" fill="#5a1a30">Réalisation concrète ancrée dans</text>
      <text x="111" y="74" text-anchor="middle" font-family="Nunito,sans-serif" font-size="10.5" fill="#5a1a30">la spécialité, porteuse d'enjeux</text>
      <text x="111" y="88" text-anchor="middle" font-family="Nunito,sans-serif" font-size="10.5" fill="#5a1a30">économiques, sociaux, écologiques</text>
      <text x="111" y="102" text-anchor="middle" font-family="Nunito,sans-serif" font-size="10.5" fill="#5a1a30">ou numériques.</text>
      <line x1="22" y1="113" x2="200" y2="113" stroke="#d4789a" stroke-width="0.6" opacity="0.5"/>
      <text x="111" y="130" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9.5" font-weight="700" fill="#b54070">→ Donner du sens aux apprentissages</text>
    </g>
    <g class="p17">
      <rect x="239" y="10" width="202" height="128" rx="12" fill="#dff0e8" stroke="#a0ddd0" stroke-width="1.2"/>
      <rect x="239" y="10" width="202" height="34" rx="12" fill="#1d9d80"/>
      <rect x="239" y="32" width="202" height="12" fill="#1d9d80"/>
      <text x="340" y="24" text-anchor="middle" font-family="Playfair Display,serif" font-size="12" font-weight="700" fill="#fff">② Démarche accompagnée</text>
      <text x="340" y="37" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9" fill="rgba(255,255,255,.85)">individuelle, collective et guidée</text>
      <text x="340" y="60" text-anchor="middle" font-family="Nunito,sans-serif" font-size="10.5" fill="#0a3a2a">Part individuelle tracée, retours</text>
      <text x="340" y="74" text-anchor="middle" font-family="Nunito,sans-serif" font-size="10.5" fill="#0a3a2a">réguliers sur l'expérience vécue.</text>
      <text x="340" y="88" text-anchor="middle" font-family="Nunito,sans-serif" font-size="10.5" fill="#0a3a2a">Choisi et connu de tous :</text>
      <text x="340" y="102" text-anchor="middle" font-family="Nunito,sans-serif" font-size="10.5" fill="#0a3a2a">élèves, équipe péda., familles.</text>
      <line x1="251" y1="113" x2="429" y2="113" stroke="#a0ddd0" stroke-width="0.6" opacity="0.5"/>
      <text x="340" y="130" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9.5" font-weight="700" fill="#1d9d80">→ Développer l'autonomie et la coopération</text>
    </g>
    <g class="p17">
      <rect x="468" y="10" width="202" height="128" rx="12" fill="#eaf2f4" stroke="#7c9aa5" stroke-width="1.2"/>
      <rect x="468" y="10" width="202" height="34" rx="12" fill="#4e7d8a"/>
      <rect x="468" y="32" width="202" height="12" fill="#4e7d8a"/>
      <text x="569" y="24" text-anchor="middle" font-family="Playfair Display,serif" font-size="12" font-weight="700" fill="#fff">③ Compétences transférables</text>
      <text x="569" y="37" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9" fill="rgba(255,255,255,.85)">méthodologiques et psycho-sociales</text>
      <text x="569" y="60" text-anchor="middle" font-family="Nunito,sans-serif" font-size="10.5" fill="#163038">Compétences disciplinaires MPC</text>
      <text x="569" y="74" text-anchor="middle" font-family="Nunito,sans-serif" font-size="10.5" fill="#163038">et transversales : organisation,</text>
      <text x="569" y="88" text-anchor="middle" font-family="Nunito,sans-serif" font-size="10.5" fill="#163038">esprit critique, communication,</text>
      <text x="569" y="102" text-anchor="middle" font-family="Nunito,sans-serif" font-size="10.5" fill="#163038">adaptabilité.</text>
      <line x1="480" y1="113" x2="658" y2="113" stroke="#7c9aa5" stroke-width="0.6" opacity="0.5"/>
      <text x="569" y="130" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9.5" font-weight="700" fill="#4e7d8a">→ Transférer dans d'autres contextes</text>
    </g>
  </svg>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    Caractéristiques clés
  </h3>
  <style>
    .f22c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f22c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f22c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f22c:hover::before{opacity:1}
  </style>
  <div class="g2">
    <div class="f22c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070">
      <strong>À partir de la Première</strong><br>
      <span style="font-size:12px">Le projet est inscrit dans le cadre de la préparation du Bac dès la classe de première, calé sur les programmes et le référentiel de spécialité.</span>
    </div>
    <div class="f22c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0">
      <strong>Pluridisciplinaire ou mono</strong><br>
      <span style="font-size:12px">La réalisation peut mobiliser un ou plusieurs enseignements. Même si piloté par un seul prof, chaque enseignant peut y référencer ses contenus.</span>
    </div>
    <div class="f22c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80">
      <strong>Résultat matériel ou immatériel</strong><br>
      <span style="font-size:12px">Le projet peut aboutir à un objet, un service, un document, une démarche, une performance… Le critère est l'ambition et l'ancrage professionnel.</span>
    </div>
    <div class="f22c bx" style="background:transparent;border:1px solid #e8820a;border-left:3px solid #e8820a;--bar:#e8820a">
      <strong>Retours réguliers obligatoires</strong><br>
      <span style="font-size:12px">Toute démarche de projet doit intégrer des retours réguliers sur l'expérience vécue et la manière d'agir, pas uniquement une évaluation finale.</span>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Ressource officielle
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="https://www.education.gouv.fr/bo/2024/Hebdo28/MENE2416916C" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Document d'accompagnement sur le projet — BO 2024
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    En début d'année de Première, si vous avez l'occasion de participer à la réunion de l'équipe pédagogique dédiée au choix du projet, c'est souvent le meilleur moment pour identifier les apports MPC pertinents, sans avoir à les plaquer artificiellement en cours d'année. Un projet bien ciblé peut naturellement devenir le fil conducteur de plusieurs séquences en mathématiques et physique-chimie.
  </div>
</div>
`},

'f28':{n:'F28',t:'Concevoir une séquence pédagogique en MPC',s:'Programmes BO 2019, ressources Éduscol, plan prévisionnel de formation',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    Les programmes officiels — point de départ incontournable
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Les programmes de mathématiques et physique-chimie pour CAP et Bac Pro sont publiés au <strong>BO spécial n° 5 du 11 avril 2019</strong>. Ils définissent les <strong>connaissances, capacités et attitudes</strong> à construire tout au long du cursus. Avant toute préparation de cours, c'est le document de référence à consulter.
  </div>
  <style>
    .f23c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f23c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f23c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f23c:hover::before{opacity:1}
  </style>
  <div class="g2" style="margin-top:10px">
    <div class="f23c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 22h20L12 2z"/><line x1="12" y1="15" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg> Mathématiques</strong>Automatismes, vocabulaire ensembliste, algorithmique et programmation..., ressources d'accompagnement disponibles sur Éduscol.</div>
    <div class="f23c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 3v5l-4 8a2 2 0 0 0 1.8 3h8.4a2 2 0 0 0 1.8-3l-4-8V3"/><line x1="8" y1="16" x2="16" y2="16"/></svg> Physique-Chimie</strong>Exemples de séquences et activités en classe, ressources d'accompagnement disponibles sur Éduscol.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    Du programme à la séance : les 3 niveaux de planification
  </h3>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 680 152" style="overflow:visible;display:block;margin:8px 0" role="img">
    <title>Du programme à la séance — 3 niveaux de planification en MPC</title>
    <style>
      .n18{transition:transform .26s cubic-bezier(.34,1.56,.64,1),filter .22s ease;transform-box:fill-box;transform-origin:center;cursor:default}
      .n18:hover{transform:translateY(-5px);filter:drop-shadow(0 8px 18px rgba(0,0,0,.22))}
      .nt{font-family:'Nunito',sans-serif;font-size:10.5px}
      .nh{font-family:'Playfair Display',serif;font-size:12px;font-weight:700}
    </style>
    <g class="n18">
      <rect x="4" y="10" width="200" height="132" rx="12" fill="#fce8f2" stroke="#d4789a" stroke-width="1.5"/>
      <rect x="4" y="10" width="200" height="34" rx="12" fill="#b54070"/>
      <rect x="4" y="32" width="200" height="12" fill="#b54070"/>
      <text x="104" y="24" text-anchor="middle" class="nh" fill="#fff">Plan prévisionnel</text>
      <text x="104" y="37" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9" fill="rgba(255,255,255,.85)">Vision sur l'année complète</text>
      <text x="20" y="60" class="nt" fill="#5a1a30">• Tous les enseignements :</text>
      <text x="20" y="74" class="nt" fill="#5a1a30">  maths, PC, co-intervention,</text>
      <text x="20" y="88" class="nt" fill="#5a1a30">  consolidation, chef-d'œuvre</text>
      <text x="20" y="102" class="nt" fill="#5a1a30">• Calendrier scolaire, PFMP,</text>
      <text x="20" y="116" class="nt" fill="#5a1a30">  examens intégrés</text>
      <text x="104" y="134" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9" font-weight="700" fill="#b54070">Outil : semainier annuel</text>
    </g>
    <text x="218" y="82" text-anchor="middle" font-size="22" fill="#b54070">→</text>
    <g class="n18">
      <rect x="234" y="10" width="212" height="132" rx="12" fill="#eaf2f4" stroke="#7c9aa5" stroke-width="1.5"/>
      <rect x="234" y="10" width="212" height="34" rx="12" fill="#4e7d8a"/>
      <rect x="234" y="32" width="212" height="12" fill="#4e7d8a"/>
      <text x="340" y="24" text-anchor="middle" class="nh" fill="#fff">Séquence pédagogique</text>
      <text x="340" y="37" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9" fill="rgba(255,255,255,.85)">Unité de 3 à 8 séances</text>
      <text x="250" y="60" class="nt" fill="#163038">• Objectifs de la séquence</text>
      <text x="250" y="74" class="nt" fill="#163038">• Connaissances et capacités</text>
      <text x="250" y="88" class="nt" fill="#163038">  ciblées (ref. programme)</text>
      <text x="250" y="102" class="nt" fill="#163038">• Modalités d'évaluation</text>
      <text x="250" y="116" class="nt" fill="#163038">  formative et sommative</text>
      <text x="340" y="134" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9" font-weight="700" fill="#4e7d8a">Outil : fiche de séquence</text>
    </g>
    <text x="460" y="82" text-anchor="middle" font-size="22" fill="#4e7d8a">→</text>
    <g class="n18">
      <rect x="476" y="10" width="200" height="132" rx="12" fill="#dff0e8" stroke="#a0ddd0" stroke-width="1.5"/>
      <rect x="476" y="10" width="200" height="34" rx="12" fill="#1d9d80"/>
      <rect x="476" y="32" width="200" height="12" fill="#1d9d80"/>
      <text x="576" y="24" text-anchor="middle" class="nh" fill="#fff">Séance</text>
      <text x="576" y="37" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9" fill="rgba(255,255,255,.85)">1h à 2h de cours ou TP</text>
      <text x="492" y="60" class="nt" fill="#0a3a2a">• Objectif(s) de séance précis</text>
      <text x="492" y="74" class="nt" fill="#0a3a2a">• Déroulé : phases, durées,</text>
      <text x="492" y="88" class="nt" fill="#0a3a2a">  modalités, supports</text>
      <text x="492" y="102" class="nt" fill="#0a3a2a">• Différenciation prévue</text>
      <text x="492" y="116" class="nt" fill="#0a3a2a">• Trace écrite attendue</text>
      <text x="576" y="134" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9" font-weight="700" fill="#1d9d80">Outil : fiche de préparation</text>
    </g>
  </svg>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    Construire le plan prévisionnel : 4 étapes
  </h3>
  <div class="g2">
    <div class="f23c bx" style="background:transparent;border-left:3px solid #b54070;--bar:#b54070">
      <strong>① Analyser les programmes</strong><br>
      <span style="font-size:12px">Lister toutes les connaissances et capacités à couvrir pour chaque enseignement dont vous avez la responsabilité.</span>
    </div>
    <div class="f23c bx" style="background:transparent;border-left:3px solid #4a80c0;--bar:#4a80c0">
      <strong>② Confronter au calendrier</strong><br>
      <span style="font-size:12px">Intégrer les vacances, jours fériés, PFMP et examens. Les semaines disponibles sont souvent moins nombreuses qu'on ne le croit.</span>
    </div>
    <div class="f23c bx" style="background:transparent;border-left:3px solid #4e7d8a;--bar:#4e7d8a">
      <strong>③ Organiser en séquences</strong><br>
      <span style="font-size:12px">Regrouper les contenus proches par thèmes ou compétences. Prévoir la fréquence des évaluations dans le semainier.</span>
    </div>
    <div class="f23c bx" style="background:transparent;border-left:3px solid #1d9d80;--bar:#1d9d80">
      <strong>④ Prendre en compte la bivalence</strong><br>
      <span style="font-size:12px">Le plan doit assurer un équilibre mathématiques - physique-chimie cohérent avec l'emploi du temps, le prescrit et les besoins des classes.</span>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Programmes et ressources
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="https://eduscol.education.fr/cid144182/mathematiques-voie-pro.html" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Mathématiques — voie professionnelle (Éduscol)
    </a>
    <a href="https://eduscol.education.fr/cid144184/physique-chimie-voie-pro.html" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Physique-Chimie — voie professionnelle (Éduscol)
    </a>
    <a href="https://pedagogie.ac-lille.fr/maths-physique-chimie/reperes-pour-lap/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Algorithmique et programmation Python — Ac. Lille
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Ne cherchez pas à tout planifier dans le détail dès septembre : construisez d'abord un semainier de grandes mailles (quelle séquence, quelle semaine) et affinez au fil des périodes. Repérez en priorité les semaines de PFMP et les dates d'examens, ce sont les contraintes incompressibles autour desquelles tout le reste s'articule. Un collègue de MPC en poste peut souvent vous partager son plan de l'année précédente comme base de travail.
  </div>
</div>
`},

'f29':{n:'F29',t:'Concevoir une séquence pédagogique en mathématiques',s:'Démarche mathématique, numérique, étapes d\'une séquence',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    Ce que visent les programmes de mathématiques
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Les programmes visent à développer l'apprentissage de <strong>savoirs et de raisonnements mathématiques</strong>, les outils nécessaires aux autres disciplines, l'autonomie, l'esprit critique et la rigueur. La démarche mathématique intègre une <strong>dimension expérimentale</strong> et numérique obligatoire à l'examen.
  </div>
  <div class="al gn" style="margin-top:10px;background:transparent">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
    <div><strong>Numérique obligatoire à l'examen :</strong> au moins un exercice doit comporter des questions nécessitant l'utilisation d'outils numériques (calculatrice, tableur, logiciel). Ces questions sont réalisées <em>en présence de l'examinateur</em>.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    Déroulement d'une séquence d'apprentissage en mathématiques
  </h3>
  <style>
    .seq19{transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .2s ease;cursor:default;border-radius:10px}
    .seq19:hover{transform:translateX(6px);box-shadow:4px 6px 18px rgba(0,0,0,.14)}
    .f24c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f24c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f24c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f24c:hover::before{opacity:1}
  </style>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
    <div class="seq19" style="background:transparent;border:1.5px solid #8F25AA;border-radius:10px;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#8F25AA">① Résolution d'un problème issu du monde réel</div>
      <div style="font-size:12px;margin-top:3px;color:#555">Vie courante ou domaine professionnel</div>
    </div>
    <div class="seq19" style="background:transparent;border:1.5px solid #b54070;border-radius:10px;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#b54070">② Réflexion sur le problème posé</div>
      <div style="font-size:12px;margin-top:3px;color:#555">Appropriation · vocabulaire · contexte · confrontation avec les savoirs disponibles · recherche d'informations</div>
    </div>
    <div class="seq19" style="background:transparent;border:1.5px solid #e8820a;border-radius:10px;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#c06800">③ Élaboration d'une conjecture</div>
      <div style="font-size:12px;margin-top:3px;color:#555">Recherche avec mise en place éventuelle d'une première expérimentation · émission de la conjecture</div>
    </div>
    <div class="seq19" style="background:transparent;border:1.5px solid #1d9d80;border-radius:10px;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#1d9d80">④ Confirmation et preuve</div>
      <div style="font-size:12px;margin-top:3px;color:#555">Mise en place éventuelle d'une seconde expérimentation · mise en place d'une preuve argumentée · réponse au problème</div>
    </div>
    <div class="seq19" style="background:transparent;border:1.5px solid #4a80c0;border-radius:10px;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#2a60a0">⑤ Synthèse collective → Institutionnalisation des acquis</div>
      <div style="font-size:12px;margin-top:3px;color:#555">Synthèse de la leçon · formalisation (notions, savoir-faire, démarches)</div>
    </div>
    <div class="seq19" style="background:transparent;border:1.5px solid #4e7d8a;border-radius:10px;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#4e7d8a">⑥ Opérationnalisation des acquis</div>
      <div style="font-size:12px;margin-top:3px;color:#555">Résolution de petits exercices · automatisation des procédures · réinvestissement dans de nouveaux problèmes</div>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    Points de vigilance pour la conception
  </h3>
  <div class="g2">
    <div class="f24c bx" style="background:transparent;border:1.5px solid #1d9d80;border-left:4px solid #1d9d80;--bar:#1d9d80">
      <strong style="color:#1d9d80">Ancrer dans le contexte professionnel</strong><br>
      <span style="font-size:12px">Choisir un problème issu du domaine professionnel de la section renforce le sens des mathématiques pour les élèves et facilite l'adhésion à la démarche.</span>
    </div>
    <div class="f24c bx" style="background:transparent;border:1.5px solid #4a80c0;border-left:4px solid #4a80c0;--bar:#4a80c0">
      <strong style="color:#4a80c0">Planifier l'usage du numérique</strong><br>
      <span style="font-size:12px">Choisir les outils numériques en fonction des objectifs d'apprentissage et de la plus-value qu'ils apportent aux élèves. Dès la conception de la séquence, identifier les étapes où leur utilisation est pertinente et prévoir les temps nécessaires à leur appropriation. Dans le cadre d'un CCF, s'assurer que les élèves maîtrisent déjà les outils mobilisés.</span>
    </div>
    <div class="f24c bx" style="background:transparent;border:1.5px solid #b54070;border-left:4px solid #b54070;--bar:#b54070">
      <strong style="color:#b54070">Ne pas sauter l'institutionnalisation</strong><br>
      <span style="font-size:12px">L'étape ⑤ est souvent sacrifiée par manque de temps. C'est pourtant elle qui fixe les acquis dans la mémoire des élèves, lui réserver au moins 10 minutes.</span>
    </div>
    <div class="f24c bx" style="background:transparent;border:1.5px solid #4e7d8a;border-left:4px solid #4e7d8a;--bar:#4e7d8a">
      <strong style="color:#4e7d8a">Éviter l'exercice-liste</strong><br>
      <span style="font-size:12px">Une séquence réduite à des exercices successifs sans démarche de résolution de problème ne correspond pas aux attendus des programmes. L'étape ① doit être le point de départ.</span>
    </div>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    En LP, les élèves sont souvent à l'aise avec la manipulation mais moins avec la formalisation. Profitez de l'étape ③ pour observer les gestes et les raisonnements, puis appuyez-vous sur ce que <em>les élèves eux-mêmes</em> ont fait pour construire l'étape ⑤. Une trace écrite co-construite en classe est beaucoup mieux mémorisée qu'un cours dicté. Côté sécurité : <strong>n'attendez pas d'avoir un incident</strong> pour lire les fiches de données de sécurité (FDS) des produits que vous utilisez.
  </div>
</div>
`},

'f30':{n:'F30',t:'Concevoir une séquence pédagogique en physique-chimie',s:'Démarche scientifique, sécurité anticipée, numérique, moments essentiels',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
    Principes
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Les programmes de physique-chimie visent l'acquisition de connaissances et de capacités spécifiques tout en faisant pratiquer la <strong>démarche scientifique</strong>. La pratique de l'expérimentation développe curiosité, créativité, esprit critique, rigueur et respect de la sécurité.
  </div>
  <div class="al" style="margin-top:10px;background:transparent">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
    <div>Avant toute activité expérimentale : vérifier que les élèves connaissent les risques, disposent des <strong>EPI</strong>, que la distribution des produits est sécurisée, et que la récupération des déchets est anticipée.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    Étapes essentielles de la démarche scientifique en classe de PC
  </h3>
  <style>
    .seq20{transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .2s ease;cursor:default;border-radius:10px}
    .seq20:hover{transform:translateX(6px);box-shadow:4px 6px 18px rgba(0,0,0,.14)}
    .f25c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f25c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f25c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f25c:hover::before{opacity:1}
  </style>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px">
    <div class="seq20" style="background:transparent;border:1.5px solid #8F25AA;border-radius:10px;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#8F25AA">① Appropriation de la situation-problème</div>
      <div style="font-size:12px;margin-top:3px;color:#555">Les élèves analysent la situation (souvent individuellement) et soulèvent des questions glissant de l'univers quotidien à celui de la physique-chimie.</div>
    </div>
    <div class="seq20" style="background:transparent;border:1.5px solid #4a80c0;border-radius:10px;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#2a60a0">② Formulation d'hypothèses et de protocoles possibles</div>
      <div style="font-size:12px;margin-top:3px;color:#555">Formulation orale ou écrite d'hypothèses · élaboration d'expériences pour les tester · communication à la classe</div>
    </div>
    <div class="seq20" style="background:transparent;border:1.5px solid #F42FA0;border-radius:10px;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#F42FA0">③ L'investigation ou la résolution de problème</div>
      <div style="font-size:12px;margin-top:3px;color:#555">Tester les hypothèses · mettre en œuvre le protocole expérimental · interactions au sein des groupes · schématiser, décrire les observations, analyser les résultats</div>
    </div>
    <div class="seq20" style="background:transparent;border:1.5px solid #3aaa5a;border-radius:10px;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#2a8a4a">④ Mise en commun des résultats</div>
      <div style="font-size:12px;margin-top:3px;color:#555">Chaque groupe rend compte de son travail · constat de plusieurs voies possibles · élaboration collective de preuves · trace écrite</div>
    </div>
    <div class="seq20" style="background:transparent;border:1.5px solid #2aaa8a;border-radius:10px;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#4030F2">⑤ Acquisition et structuration des connaissances</div>
      <div style="font-size:12px;margin-top:3px;color:#555">Mise en évidence de nouveaux éléments de savoir · confrontation avec le savoir établi · analyse critique des expériences · trace écrite décontextualisée</div>
    </div>
  </div>
  <div class="al gn">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
    <div>Le numérique trouve toute sa place en PC : <strong>ExAO, tableur-grapheur, simulations, algorithmes</strong>, recherches documentaires, communication écrite et orale.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    Points de vigilance pour la conception
  </h3>
  <div class="g2">
    <div class="f25c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 12 11 14 15 10"/></svg> Anticiper la sécurité</strong>La vérification des EPI et des risques doit être intégrée dans la <strong>fiche de préparation</strong>, pas improvisée en salle. Prévoir aussi la gestion des déchets.</div>
    <div class="f25c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 12 11 14 15 10"/></svg> Valoriser l'étape d'investigation</strong>L'étape ③ est le cœur de la démarche : laisser du temps aux groupes, circuler, observer sans intervenir trop vite. L'erreur fait partie de l'apprentissage.</div>
    <div class="f25c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Ne pas négliger la trace écrite</strong>L'étape ⑤ doit produire une trace écrite décontextualisée, c'est-à-dire réutilisable dans un autre contexte. C'est ce qui distingue une activité d'un vrai apprentissage.</div>
    <div class="f25c bx" style="background:transparent;border:1px solid #4e7d8a;border-left:3px solid #4e7d8a;--bar:#4e7d8a"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Éviter le protocole clé en main</strong>Donner d'emblée un protocole détaillé court-circuite l'étape ②. Même dans un lycée professionnel, laisser une marge d'autonomie dans la formulation des hypothèses renforce les compétences expérimentales.</div>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    En LP, les élèves sont souvent à l'aise avec la manipulation mais moins avec la formalisation. Profitez de l'étape ③ pour observer les gestes et les raisonnements, puis appuyez-vous sur ce que <em>les élèves eux-mêmes</em> ont fait pour construire l'étape ⑤. Une trace écrite co-construite en classe est beaucoup mieux mémorisée qu'un cours dicté. Côté sécurité : <strong>n'attendez pas d'avoir un incident</strong> pour lire les fiches de données de sécurité (FDS) des produits que vous utilisez.
  </div>
</div>
`},

'f31':{n:'F31',t:'Préparer la première heure de cours',s:'Les enjeux, objectifs prioritaires et conseils pratiques',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    Les enjeux de la première heure
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    La première heure de cours est un moment clé : elle <strong>installe le cadre de travail, lance la dynamique de groupe et pose votre positionnement</strong> d'enseignant. Ce n'est pas un moment où l'on fait tout — mais chaque geste compte. Un démarrage réussi facilite les semaines qui suivent.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    Déroulé en 3 temps
  </h3>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 680 136" style="overflow:visible;display:block;margin:8px 0" role="img">
    <title>Déroulé de la première heure de cours en 3 temps</title>
    <style>
      .h21{transition:transform .26s cubic-bezier(.34,1.56,.64,1),filter .22s ease;transform-box:fill-box;transform-origin:center;cursor:default}
      .h21:hover{transform:translateY(-5px);filter:drop-shadow(0 8px 18px rgba(0,0,0,.22))}
      .ht{font-family:'Nunito',sans-serif;font-size:10.5px}
      .hh{font-family:'Playfair Display',serif;font-size:12px;font-weight:700;text-anchor:middle}
      .f26c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
      .f26c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
      .f26c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
      .f26c:hover::before{opacity:1}
    </style>
    <g class="h21">
      <rect x="4" y="8" width="198" height="120" rx="12" fill="#fce8f2" stroke="#d4789a" stroke-width="1.5"/>
      <rect x="4" y="8" width="198" height="34" rx="12" fill="#b54070"/>
      <rect x="4" y="30" width="198" height="12" fill="#b54070"/>
      <text x="103" y="24" class="hh" fill="#fff">① Accueil</text>
      <text x="103" y="37" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9" fill="rgba(255,255,255,.85)">~10 minutes</text>
      <text x="18" y="58" class="ht" fill="#5a1a30">• Se présenter : nom, ce qui vous</text>
      <text x="18" y="72" class="ht" fill="#5a1a30">  motive à enseigner ici.</text>
      <text x="18" y="86" class="ht" fill="#5a1a30">• Appel + tour de table rapide.</text>
      <text x="18" y="100" class="ht" fill="#5a1a30">• Posture calme, sourire, mot</text>
      <text x="18" y="114" class="ht" fill="#5a1a30">  d'accueil personnalisé.</text>
    </g>
    <text x="216" y="76" text-anchor="middle" font-size="22" fill="#b54070">→</text>
    <g class="h21">
      <rect x="234" y="8" width="212" height="120" rx="12" fill="#eaf2f4" stroke="#7c9aa5" stroke-width="1.5"/>
      <rect x="234" y="8" width="212" height="34" rx="12" fill="#4e7d8a"/>
      <rect x="234" y="30" width="212" height="12" fill="#4e7d8a"/>
      <text x="340" y="24" class="hh" fill="#fff">② Cadre et organisation</text>
      <text x="340" y="37" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9" fill="rgba(255,255,255,.85)">~15 minutes</text>
      <text x="248" y="58" class="ht" fill="#163038">• Présenter sa façon de travailler</text>
      <text x="248" y="72" class="ht" fill="#163038">  (cahier, évaluations, rituels).</text>
      <text x="248" y="86" class="ht" fill="#163038">• Poser les règles : ponctualité,</text>
      <text x="248" y="100" class="ht" fill="#163038">  écoute, sécurité — simplement,</text>
      <text x="248" y="114" class="ht" fill="#163038">  sans menace ni ambiguïté.</text>
    </g>
    <text x="460" y="76" text-anchor="middle" font-size="22" fill="#4e7d8a">→</text>
    <g class="h21">
      <rect x="478" y="8" width="198" height="120" rx="12" fill="#dff0e8" stroke="#a0ddd0" stroke-width="1.5"/>
      <rect x="478" y="8" width="198" height="34" rx="12" fill="#1d9d80"/>
      <rect x="478" y="30" width="198" height="12" fill="#1d9d80"/>
      <text x="577" y="24" class="hh" fill="#fff">③ Mise au travail</text>
      <text x="577" y="37" text-anchor="middle" font-family="Nunito,sans-serif" font-size="9" fill="rgba(255,255,255,.85)">~25 minutes</text>
      <text x="492" y="58" class="ht" fill="#0a3a2a">• Activité de diagnostic ou</text>
      <text x="492" y="72" class="ht" fill="#0a3a2a">  de révision courte.</text>
      <text x="492" y="86" class="ht" fill="#0a3a2a">• Aperçu du programme :</text>
      <text x="492" y="100" class="ht" fill="#0a3a2a">  points concrets utiles pour</text>
      <text x="492" y="114" class="ht" fill="#0a3a2a">  leur filière professionnelle.</text>
    </g>
  </svg>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    Objectifs prioritaires
  </h3>
  <div class="g2">
    <div class="f26c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> Créer le premier contact</strong>Un sourire, une posture calme, un mot d'accueil sincère suffisent souvent à désamorcer tensions et appréhensions. L'objectif : que les élèves se sentent attendus.</div>
    <div class="f26c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg> Découvrir les élèves</strong>Appel, questionnaire rapide (oral ou écrit), tour de table. Commencer à repérer les profils, les spécialités, les niveaux apparents — sans juger.</div>
    <div class="f26c bx" style="background:transparent;border:1px solid #4e7d8a;border-left:3px solid #4e7d8a;--bar:#4e7d8a"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg> Installer les premiers rituels</strong>Dire bonjour, afficher l'objectif de séance, sortir le matériel. Ces automatismes simples rassurent et structurent la vie de classe dès le départ.</div>
    <div class="f26c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> Donner du sens</strong>Montrer dès la première heure en quoi les mathématiques et la physique-chimie servent leur parcours professionnel même avec un seul exemple concret lié à leur spécialité.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    Conseils pratiques
  </h3>
  <div class="g2">
    <div class="f26c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 12 11 14 15 10"/></svg> Préparer un déroulé précis</strong>Scénario en 3 temps, avec marges si le groupe est agité ou trop silencieux. Mieux vaut faire peu mais bien.</div>
    <div class="f26c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 12 11 14 15 10"/></svg> Montrer sa cohérence</strong>Posture, ton, gestes : les élèves observent tout. Être aligné entre ce que vous dites et ce que vous faites est le fondement de votre crédibilité.</div>
    <div class="f26c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Ne pas tout faire d'un coup</strong>Certaines règles ou contenus peuvent être abordés dans les séances suivantes. L'exhaustivité en première heure est contre-productive.</div>
    <div class="f26c bx" style="background:transparent;border:1px solid #4e7d8a;border-left:3px solid #4e7d8a;--bar:#4e7d8a"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Éviter l'attente passive</strong>Ne pas passer l'heure entière à parler. Lancer les élèves dans une tâche courte, même simple, positionne le cours comme un espace de travail actif.</div>
  </div>
  <div class="al gn" style="margin-top:10px">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
    <div><strong>Lancer une activité dès la première heure</strong>, une révision ou un diagnostic court : cela évalue les acquis, met les élèves en activité et envoie un signal clair sur votre façon de travailler.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Quelques ressources pour débuter
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="http://fabien.fenouillet.free.fr/documents/motivation_ado.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      La motivation des adolescents — F. Fenouillet (PDF)
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Avant votre première heure, renseignez-vous sur la spécialité de la classe : quelques mots sur leur domaine professionnel (électrotechnique, commerce, cuisine, carrosserie…) montrent que vous avez préparé la rencontre. Un exemple en MPC ancré dans leur métier, même approximatif, vaut mieux qu'un programme récité. Et si vous ne savez pas encore tout : l'honnêteté sur votre situation de contractuel est souvent bien reçue par les élèves.
  </div>
</div>
`},

'f32':{n:'F32',t:'Renseigner le cahier de textes de la classe',s:'Document officiel à valeur juridique',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    Nature du document
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Le cahier de textes numérique est un <strong>document officiel à valeur juridique</strong>. Il doit refléter fidèlement le déroulement des enseignements et permettre de suivre la progression des apprentissages. Il se substitue aux cahiers papier depuis la rentrée 2011.
  </div>
  <div class="al" style="margin-top:10px">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><path d="M3 6l9-3 9 3"/><path d="M6 12H3l3-6 3 6H6z"/><path d="M18 12h-3l3-6 3 6h-3z"/></svg></div>
    <div>Il doit être accessible à tout moment aux élèves, à leurs responsables légaux et à l'équipe éducative.<br><strong>Référence : circulaire BOEN n° 32 du 9 septembre 2010.</strong></div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
    Qui accède au cahier de textes ?
  </h3>
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 680 120" style="overflow:visible;display:block;margin:8px 0" role="img">
    <title>Utilisateurs du cahier de textes numérique</title>
    <style>
      .u22{transition:transform .26s cubic-bezier(.34,1.56,.64,1),filter .22s ease;transform-box:fill-box;transform-origin:center;cursor:default}
      .u22:hover{transform:translateY(-5px);filter:drop-shadow(0 8px 18px rgba(0,0,0,.22))}
      .ut{font-family:'Nunito',sans-serif;font-size:10.5px;text-anchor:middle}
      .uh{font-family:'Playfair Display',serif;font-size:11.5px;font-weight:700;text-anchor:middle}
      .f27c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
      .f27c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
      .f27c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
      .f27c:hover::before{opacity:1}
    </style>
    <g class="u22">
      <rect x="4" y="8" width="150" height="104" rx="12" fill="#fce8f2" stroke="#d4789a" stroke-width="1.2"/>
      <rect x="4" y="8" width="150" height="30" rx="12" fill="#b54070"/>
      <rect x="4" y="27" width="150" height="11" fill="#b54070"/>
      <text x="79" y="22" class="uh" fill="#fff">Enseignant</text>
      <text x="79" y="53" class="ut" fill="#5a1a30">Saisit le contenu</text>
      <text x="79" y="67" class="ut" fill="#5a1a30">de chaque séance</text>
      <text x="79" y="81" class="ut" fill="#5a1a30">et les travaux</text>
      <text x="79" y="95" class="ut" fill="#5a1a30" font-weight="700">→ Obligation réglementaire</text>
    </g>
    <text x="167" y="68" text-anchor="middle" font-size="18" fill="#b54070">↔</text>
    <g class="u22">
      <rect x="180" y="8" width="150" height="104" rx="12" fill="#eaf2f4" stroke="#7c9aa5" stroke-width="1.2"/>
      <rect x="180" y="8" width="150" height="30" rx="12" fill="#4e7d8a"/>
      <rect x="180" y="27" width="150" height="11" fill="#4e7d8a"/>
      <text x="255" y="22" class="uh" fill="#fff">Élèves</text>
      <text x="255" y="53" class="ut" fill="#163038">Consultent cours,</text>
      <text x="255" y="67" class="ut" fill="#163038">travaux à rendre</text>
      <text x="255" y="81" class="ut" fill="#163038">et ressources.</text>
      <text x="255" y="95" class="ut" fill="#163038" font-weight="700">→ Complète le CDT individuel</text>
    </g>
    <text x="343" y="68" text-anchor="middle" font-size="18" fill="#4e7d8a">↔</text>
    <g class="u22">
      <rect x="356" y="8" width="150" height="104" rx="12" fill="#dff0e8" stroke="#a0ddd0" stroke-width="1.2"/>
      <rect x="356" y="8" width="150" height="30" rx="12" fill="#1d9d80"/>
      <rect x="356" y="27" width="150" height="11" fill="#1d9d80"/>
      <text x="431" y="22" class="uh" fill="#fff">Parents / tuteurs</text>
      <text x="431" y="53" class="ut" fill="#0a3a2a">Suivent la progression,</text>
      <text x="431" y="67" class="ut" fill="#0a3a2a">vérifient les devoirs</text>
      <text x="431" y="81" class="ut" fill="#0a3a2a">et les évaluations.</text>
      <text x="431" y="95" class="ut" fill="#0a3a2a" font-weight="700">→ Droit d'accès permanent</text>
    </g>
    <text x="519" y="68" text-anchor="middle" font-size="18" fill="#1d9d80">↔</text>
    <g class="u22">
      <rect x="532" y="8" width="144" height="104" rx="12" fill="#ede4f7" stroke="#c4a8ea" stroke-width="1.2"/>
      <rect x="532" y="8" width="144" height="30" rx="12" fill="#7a5bb5"/>
      <rect x="532" y="27" width="144" height="11" fill="#7a5bb5"/>
      <text x="604" y="22" class="uh" fill="#fff">Équipe éducative</text>
      <text x="604" y="53" class="ut" fill="#3a1a6a">CPE, proviseur,</text>
      <text x="604" y="67" class="ut" fill="#3a1a6a">IEN, inspecteurs :</text>
      <text x="604" y="81" class="ut" fill="#3a1a6a">contrôle possible.</text>
      <text x="604" y="95" class="ut" fill="#3a1a6a" font-weight="700">→ Document de référence</text>
    </g>
  </svg>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    Contenu obligatoire à chaque séance
  </h3>
  <div class="g2">
    <div class="f27c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> Contenu de la séance</strong>Description du travail réalisé en classe : notion abordée, type d'activité (cours, TP, exercices, évaluation…). Être précis mais concis.</div>
    <div class="f27c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Travaux à rendre</strong>Les devoirs indiqués portent la date à laquelle ils ont été donnés et la date de remise. Ne jamais omettre l'une des deux.</div>
    <div class="f27c bx" style="background:transparent;border:1px solid #4e7d8a;border-left:3px solid #4e7d8a;--bar:#4e7d8a"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg> Énoncés et ressources</strong>Les énoncés d'exercices, devoirs et évaluations qui ne figurent pas dans un manuel doivent être joints (texte ou fichier).</div>
    <div class="f27c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> Groupes et sous-groupes</strong>Si la séance concerne un groupe ou sous-groupe spécifique (dédoublement, consolidation…), le contenu peut également y être mentionné.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    Points de vigilance
  </h3>
  <div class="g2">
    <div class="f27c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Ne pas confondre CDT classe et cahier individuel de l'élève</strong>Le cahier de textes numérique de la <em>classe</em> ne dispense pas chaque élève de tenir son propre cahier.</div>
    <div class="f27c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Valeur juridique réelle</strong>En cas de litige (absence, contestation d'évaluation, inspection…), le cahier de textes fait foi. Un CDT mal tenu peut vous mettre en difficulté.</div>
    <div class="f27c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 12 11 14 15 10"/></svg> Renseigner au plus près de la séance</strong>Idéalement, saisir le contenu le jour même ou le lendemain au plus tard. L'oubli s'accumule et devient difficile à rattraper.</div>
    <div class="f27c bx" style="background:transparent;border:1px solid #4e7d8a;border-left:3px solid #4e7d8a;--bar:#4e7d8a"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 12 11 14 15 10"/></svg> Utiliser les outils de l'établissement</strong>Pronote, Éclat-BFC, SACOCHE… Renseignez-vous dès la prise de poste sur l'outil utilisé dans votre lycée et ses modalités de saisie.</div>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Deux minutes en fin de séance, avant de quitter la salle, c'est vraiment tout ce qu'il faut pour tenir le cahier de textes à jour. Si vous attendez le soir ou le lendemain, vous aurez oublié les détails. Un brouillon rapide dans votre téléphone pendant que les élèves rangent peut aussi faire l'affaire. En cas de contrôle ou d'inspection, un CDT rigoureux est souvent le premier signe visible de votre sérieux.
  </div>
</div>
`},

'f33':{n:'F33',t:'Gérer l\'hétérogénéité des élèves',s:'Différenciation pédagogique en MPC — leviers, approches et CUA',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    Principe
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Gérer l'hétérogénéité, c'est <strong>permettre à tous les élèves d'apprendre</strong>, chacun à son rythme, avec un niveau d'exigence adapté. Différencier ne signifie pas <em>donner moins</em> aux élèves en difficulté, ni <em>laisser attendre</em> les élèves en réussite : c'est adapter les leviers pédagogiques <strong>dans les deux sens</strong>, tout en maintenant l'ambition pour tous.<br><br>
    Toute différenciation commence par une <strong>analyse des besoins des élèves</strong> : observer les erreurs récurrentes, exploiter les tests de positionnement de Seconde, prendre appui sur les évaluations formatives. On ne différencie pas « par défaut », on différencie parce qu'on sait <em>pour qui</em> et <em>pourquoi</em>.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>
    Les 6 leviers de différenciation
  </h3>
  <style>
    .f28c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f28c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f28c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f28c:hover::before{opacity:1}
  </style>
  <div class="g2">
    <div class="f28c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> Contenu</strong><span style="font-size:12px">Exercices de complexité croissante (niveaux 1/2/3), choix d'activités autour d'une même notion.</span></div>
    <div class="f28c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg> Format</strong><span style="font-size:12px">Varier les modalités (autonomie, binôme tutoré, collectif) et les supports (fiche, vidéo, manipulation, simulation).</span></div>
    <div class="f28c bx" style="background:transparent;border:1px solid #4e7d8a;border-left:3px solid #4e7d8a;--bar:#4e7d8a"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> Accompagnement</strong><span style="font-size:12px">Aides à la demande (fiches méthode, reformulations), binômes d'entraide, tutorat ciblé.</span></div>
    <div class="f28c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> Rythme</strong><span style="font-size:12px">Temps supplémentaire pour certains, approfondissements pour d'autres, pauses cognitives adaptées.</span></div>
    <div class="f28c bx" style="background:transparent;border:1px solid #7a5bb5;border-left:3px solid #7a5bb5;--bar:#7a5bb5"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg> Production attendue</strong><span style="font-size:12px">Accepter plusieurs formes : oral, écrit, schéma, calcul, présentation d'un raisonnement.</span></div>
    <div class="f28c bx" style="background:transparent;border:1px solid #e8820a;border-left:3px solid #e8820a;--bar:#e8820a"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 12 11 14 15 10"/></svg> Évaluation</strong><span style="font-size:12px">Tronc commun + exercice au choix, critères explicites, évaluation différenciée ou modulable.</span></div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    Différencier dans les deux sens
  </h3>
  <div class="g2">
    <div class="f28c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;font-size:12.5px;--bar:#b54070">
      <strong style="display:block;margin-bottom:5px;color:#b54070"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg> Élèves en difficulté</strong>
      <ul style="margin:0;padding-left:14px;line-height:1.75">
        <li>Fiches méthode et aide procédurale à disposition</li>
        <li>Consignes graduées : version guidée puis autonome</li>
        <li>Reformulation orale, manipulations concrètes</li>
        <li>Remédiation ciblée sur les erreurs (mini-entretien)</li>
      </ul>
    </div>
    <div class="f28c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;font-size:12.5px;--bar:#1d9d80">
      <strong style="display:block;margin-bottom:5px;color:#1d9d80"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg> Élèves en réussite</strong>
      <ul style="margin:0;padding-left:14px;line-height:1.75">
        <li>Problèmes ouverts, situations-défis, questions bonus</li>
        <li>Rôle de tuteur : expliquer consolide les apprentissages</li>
        <li>Approfondissement vers des contextes pros ou BTS</li>
        <li>Autonomie accrue dans le choix de parcours d'activités</li>
      </ul>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    Approches pédagogiques à mobiliser
  </h3>
  <div class="g2">
    <div class="f28c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg> Plan de travail</strong><span style="font-size:12px">Chaque élève avance à son rythme sur un ensemble de tâches définies. Le professeur circule, guide, remédie. Adapté aux séances d'exercices en MPC.</span></div>
    <div class="f28c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> Pédagogie coopérative</strong><span style="font-size:12px">Groupes experts, jigsaw, tutorat entre pairs. Les élèves construisent ensemble les savoirs et consolident en expliquant.</span></div>
    <div class="f28c bx" style="background:transparent;border:1px solid #4e7d8a;border-left:3px solid #4e7d8a;--bar:#4e7d8a"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg> Classe inversée</strong><span style="font-size:12px">Capsule vidéo ou support à consulter en amont → la séance est dédiée à la pratique, à la remédiation et à l'approfondissement.</span></div>
    <div class="f28c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg> Ateliers tournants</strong><span style="font-size:12px">Stations simultanées : manipulation, numérique, exercice guidé, production. Permet de différencier naturellement sans multiplier les préparations.</span></div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
    Mise en œuvre pratique
  </h3>
  <div class="g2">
    <div class="f28c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg> En classe entière</strong><ul style="margin:4px 0 0;padding-left:14px;font-size:12px;line-height:1.75"><li>Consignes graduées (avec / sans guidage)</li><li>Fiches méthode à disposition libre</li><li>QR codes vers capsules vidéo ou aides audio</li><li>Grilles de suivi et feuilles de route personnalisées</li></ul></div>
    <div class="f28c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> En groupes à effectif réduit</strong><ul style="margin:4px 0 0;padding-left:14px;font-size:12px;line-height:1.75"><li>Remédiation sur les bases (calculs, lecture graphique)</li><li>Activités engageantes : escape game, quiz, défis</li><li>Mini-entretiens de remédiation sur les erreurs fréquentes</li><li>Travail à partir des tests de positionnement de Seconde</li></ul></div>
  </div>
</div>

<div class="al rd">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
  <div>
    <strong>À éviter</strong><br>
    Donner <em>moins</em> aux élèves en difficulté (<strong>adapter ≠ abaisser l'exigence</strong>) · Laisser les élèves en réussite attendre sans défi · Multiplier les préparations distinctes (décliner un même support suffit) · Réserver la différenciation aux seuls temps de soutien.
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Avant de différencier, observez et analysez : comment les élèves s'approprient-ils cette notion ? Comment les besoins se manifestent-ils concrètement ? Comment certains terminent-ils déjà alors que d'autres n'ont pas encore démarré ? Ce regard diagnostique, même informel, conditionne tout le reste. Concrètement, deux approches simples : un seul support pour tous, avec des annexes en option (jokers à demander, fiche méthode disponible, consignes plus détaillées pour ceux qui en ont besoin). Ou, si vous préparez des versions différentes, rendez-les visuellement identiques : même mise en page, même titre, mais des consignes plus guidées et moins d'autonomie pour les élèves qui en ont besoin.
  </div>
</div>

<div class="f28c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;font-size:12px;padding:10px 13px;margin-top:4px;display:flex;align-items:center;gap:10px;--bar:#4a80c0">
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4a80c0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
 <div><a href="#" onclick="event.preventDefault();openModal('f46')" style="display:block;margin-bottom:2px;color:inherit;text-decoration:none;cursor:pointer"><strong>Pour aller plus loin — F46 : Conception Universelle des Apprentissages (CUA)</strong> <span style="font-size:11px;color:#b54070">↗</span></a><span style="color:#555">Anticiper les obstacles pour tous les élèves dès la conception : 3 principes (représentation, action &amp; expression, engagement) appliqués concrètement en MPC.</span></div></div>`},

'f34':{n:'F34',t:'Les différents types d\'évaluation',s:'Diversifier le type et la forme pour faire progresser tous les élèves',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
    Principe général
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    L'évaluation des acquis est indispensable au professeur dans la conduite de son enseignement comme aux élèves dans la construction de leurs apprentissages. On privilégiera des évaluations <strong>courtes, mais fréquentes</strong> afin de fournir des retours réguliers.
  </div>
  <div class="al gn" style="margin-top:10px">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
    <div>Quel que soit le type d'évaluation mis en place, elle doit être <strong>positive</strong> : valoriser les réussites de l'élève et non signaler ses échecs.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    Les différents types d'évaluation
  </h3>
  <table class="tbl"><thead><tr><th>Type</th><th>Pourquoi ?</th><th>Pour qui ?</th><th>Quand ?</th><th>Statut</th></tr></thead>
  <tbody>
  <tr>
    <td><strong style="color:#4a80c0">Évaluation diagnostique</strong></td>
    <td>État des lieux pour construire le cours. Évaluation des acquis.</td>
    <td>L'enseignant, l'équipe disciplinaire, l'équipe pédagogique, l'élève et sa famille.</td>
    <td>Au début d'une année, d'un chapitre, ou d'un cours.</td>
    <td><span style="background:#e8f0fa;color:#2a60a0;border-radius:4px;padding:2px 7px;font-size:11px;font-weight:700">Nécessaire</span></td>
  </tr>
  <tr>
    <td><strong style="color:#1d9d80">Évaluation formatrice</strong></td>
    <td>Apporter de l'information sur les acquis en construction. Permet à l'élève de formuler un jugement sur son propre travail.</td>
    <td>L'élève pour lui permettre de prendre conscience de ses propres progrès et erreurs. L'enseignant indique comment se déroule son programme pédagogique.</td>
    <td>Au cours des apprentissages.</td>
    <td><span style="background:#dff0e8;color:#1a7a60;border-radius:4px;padding:2px 7px;font-size:11px;font-weight:700">Nécessaire</span></td>
  </tr>
  <tr>
    <td><strong style="color:#4e7d8a">Évaluation formative</strong></td>
    <td>Apporter de l'information sur les acquis en construction. Permet de situer la progression par rapport à un objectif donné.</td>
    <td>L'élève afin de l'aider à prendre conscience de ses propres progrès et de ses erreurs. L'enseignant lui indique les obstacles.</td>
    <td>Au cours des séances (en observant, en écoutant, en corrigeant…)</td>
    <td><span style="background:#eaf2f4;color:#4e7d8a;border-radius:4px;padding:2px 7px;font-size:11px;font-weight:700">Nécessaire</span></td>
  </tr>
  <tr>
    <td><strong style="color:#b54070">Évaluation certificative</strong></td>
    <td>Dresser un bilan des connaissances et des compétences d'un élève. Les bilans renvoient à l'enseignant et aux élèves l'effet de leurs efforts communs.</td>
    <td>L'élève et l'enseignant.</td>
    <td>À la fin d'un apprentissage.</td>
    <td><span style="background:#fce8f2;color:#b54070;border-radius:4px;padding:2px 7px;font-size:11px;font-weight:700">Obligatoire</span></td>
  </tr>
  </tbody></table>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Posez ce cadre dès la rentrée : évaluer, ce n'est pas sanctionner, c'est aider l'élève à savoir où il en est et vous permettre d'ajuster votre enseignement. L'erreur devient une information, pas un verdict. Installez une culture où tout ne se traduit pas en note : correction collective, auto-évaluation rapide, retour oral ciblé sont des évaluations à part entière. Distinguez explicitement les moments formatifs (sans enjeu de note) des évaluations certificatives, cela libère la prise de risque. Un rapide diagnostic en début de chapitre complète le dispositif : quelques minutes pour identifier les besoins réels, c'est du temps gagné sur toute la séquence.
  </div>
</div>
`},

'f35':{n:'F35',t:'L\'évaluation par compétences',s:'Grilles nationales, 4 niveaux de maîtrise, livret scolaire numérique',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6"/><path d="M9 16h4"/></svg>
    Les grilles nationales
  </h3>
  <p>L'évaluation des compétences est réalisée sur la base de <strong>grilles nationales communes</strong> aux mathématiques et à la physique-chimie. Elles sont adaptées aux niveaux de certification (CAP et Bac Pro) et utilisées dans le cadre des examens <em>mais aussi</em> tout au long de la formation.</p>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">
    <a href="https://cache.media.education.gouv.fr/file/28/09/7/ensel707_annexe3_1416097.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:7px;padding:7px 16px;border-radius:99px;border:1.5px solid #378add;color:#185fa5;font-size:13px;text-decoration:none;background:#e6f1fb">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      Grille nationale d'évaluation — Baccalauréat professionnel (PDF)
    </a>
    <a href="https://cache.media.education.gouv.fr/file/26/26/5/ensel838_annexeII_1302265.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:7px;padding:7px 16px;border-radius:99px;border:1.5px solid #378add;color:#185fa5;font-size:13px;text-decoration:none;background:#e6f1fb">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      Grille nationale d'évaluation — CAP (PDF)
    </a>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
    Les 4 niveaux de maîtrise des compétences
  </h3>
  <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px">
    <div style="flex:1;min-width:110px;background:#e85020;border-radius:10px;padding:12px;color:#fff;text-align:center">
      <div style="font-size:24px;font-weight:900">1</div>
      <div style="font-size:12px;font-weight:700;margin-top:4px">Non Maîtrisé</div>
      <div style="font-size:10px;opacity:.85;margin-top:4px">Objectifs non atteints</div>
    </div>
    <div style="flex:1;min-width:110px;background:#e8820a;border-radius:10px;padding:12px;color:#fff;text-align:center">
      <div style="font-size:24px;font-weight:900">2</div>
      <div style="font-size:12px;font-weight:700;margin-top:4px">Insuffisamment Maîtrisé</div>
      <div style="font-size:10px;opacity:.85;margin-top:4px">Objectifs partiellement atteints</div>
    </div>
    <div style="flex:1;min-width:110px;background:#3aaa5a;border-radius:10px;padding:12px;color:#fff;text-align:center">
      <div style="font-size:24px;font-weight:900">3</div>
      <div style="font-size:12px;font-weight:700;margin-top:4px">Maîtrisé</div>
      <div style="font-size:10px;opacity:.85;margin-top:4px">Objectifs atteints</div>
    </div>
    <div style="flex:1;min-width:110px;background:#4a9a30;border-radius:10px;padding:12px;color:#fff;text-align:center">
      <div style="font-size:24px;font-weight:900">4</div>
      <div style="font-size:12px;font-weight:700;margin-top:4px">Bien Maîtrisé</div>
      <div style="font-size:10px;opacity:.85;margin-top:4px">Objectifs dépassés</div>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    Tableau de positionnement de l'élève
  </h3>
  <table class="tbl"><thead><tr><th>Niveau</th><th>Selon le degré de maîtrise observé</th><th>Selon les objectifs visés</th></tr></thead>
  <tbody>
    <tr><td><strong style="color:#e85020">1 — Non maîtrisé</strong></td><td>Ne parvient pas à réaliser la tâche attendue</td><td>Non atteints</td></tr>
    <tr><td><strong style="color:#e8820a">2 — Insuffisamment maîtrisé</strong></td><td>Réalise la tâche avec une aide ou un étayage (enseignant, document d'appui, aide-mémoire…)</td><td>Partiellement atteints</td></tr>
    <tr><td><strong style="color:#3aaa5a">3 — Maîtrisé</strong></td><td>Réalise la tâche en autonomie dans un contexte familier</td><td>Atteints</td></tr>
    <tr><td><strong style="color:#4a9a30">4 — Bien maîtrisé</strong></td><td>Réalise la tâche en autonomie dans un contexte inédit</td><td>Dépassés</td></tr>
  </tbody></table>
  <div class="al yw" style="margin-top:10px">
    <span class="ai">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    </span>
    <span>En Bac Pro (classes de 1ère et Terminale), l'enseignant renseigne en fin d'année le <strong>Livret Scolaire Numérique (LSL)</strong> pour chaque élève.</span>
  </div>
</div>

<div class="al gn">
  <div class="ai">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg>
  </div>
  <div>
    <strong>Conseil terrain</strong><br>
    Ces niveaux peuvent être utilisés tout au long de la formation, pas uniquement en fin d'année pour le LSL, la progression d'un élève entre septembre et juin est une réussite à valoriser. Communiquer aux élèves que l'objectif visé est le <strong>niveau 4</strong> maintient l'ambition et évite que le niveau 3 devienne un plafond. Le niveau 2 reste positif : la compétence est en construction, pas absente. Renseigner le <strong>LSL au fil des évaluations</strong> plutôt qu'en bloc en juin est aussi plus fidèle et moins chronophage.
  </div>
</div>
`},

'f36':{n:'F36',t:'La rédaction de la situation d\'évaluation',s:'Cadre réglementaire CCF et conseils de rédaction',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6"/><path d="M9 16h4"/></svg>
    La rédaction des sujets d'examens
  </h3>
  <p>Lors des évaluations certificatives, il ne s'agit pas de mesurer les progrès réalisés mais de vérifier, par un <strong>sondage probant</strong>, si le candidat possède les compétences et connaissances en MPC pour la délivrance du diplôme.</p>
  <p>La situation proposée doit permettre d'évaluer : <em>« la maîtrise du candidat sur les capacités et connaissances du programme en vue de résoudre des problèmes en lien avec le domaine professionnel, d'autres disciplines ou la vie courante… »</em> Arrêté du 17 juin 2020.</p>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">
    <a href="https://eduscol.education.fr/785/controle-en-cours-de-formation" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:7px;padding:7px 16px;border-radius:99px;border:1.5px solid #378add;color:#185fa5;font-size:13px;text-decoration:none;background:#e6f1fb">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
      Cadre institutionnel du CCF — Éduscol
    </a>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    5 conseils pour concevoir une situation CCF
  </h3>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px">
    <div style="display:flex;align-items:flex-start;gap:12px;background:#fce8f2;border:1.5px solid #b54070;border-radius:10px;padding:12px 16px">
      <div style="background:#b54070;color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;flex-shrink:0">1</div>
      <div><strong style="color:#b54070;font-size:13px">Choisir un contexte attractif, motivant et réaliste</strong><p style="font-size:12.5px;color:#555;margin-top:4px;line-height:1.55">Contextes issus de l'environnement quotidien, de problématiques sociales ou sociétales (enjeux de santé, citoyenneté, événements culturels), liés à des recherches historiques, ou issus du domaine professionnel de la section.</p></div>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;background:#fdf4e8;border:1.5px solid #e8820a;border-radius:10px;padding:12px 16px">
      <div style="background:#e8820a;color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;flex-shrink:0">2</div>
      <div><strong style="color:#e8820a;font-size:13px">Envisager des situations où l'expérimentation participe à la solution</strong><p style="font-size:12.5px;color:#555;margin-top:4px;line-height:1.55">La démarche scientifique doit être au cœur de l'activité proposée. Éviter les contextes artificiels ou invraisemblables qui ne servent que d'habillage.</p></div>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;background:#e8f0fa;border:1.5px solid #4a80c0;border-radius:10px;padding:12px 16px">
      <div style="background:#4a80c0;color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;flex-shrink:0">3</div>
      <div><strong style="color:#4a80c0;font-size:13px">Insérer si nécessaire une ou plusieurs questions préalables</strong><p style="font-size:12.5px;color:#555;margin-top:4px;line-height:1.55">Ces questions permettent d'aider l'élève à s'approprier plus facilement le problème. <strong>Attention :</strong> elles ne doivent pas induire la démarche de résolution proprement dite.</p></div>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;background:#e8f5e8;border:1.5px solid #3aaa5a;border-radius:10px;padding:12px 16px">
      <div style="background:#3aaa5a;color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;flex-shrink:0">4</div>
      <div><strong style="color:#3aaa5a;font-size:13px">Mettre en œuvre des connaissances et des compétences en mathématiques et/ou physique-chimie</strong><p style="font-size:12.5px;color:#555;margin-top:4px;line-height:1.55">Éventuellement élargies à d'autres disciplines, notamment les disciplines de la spécialité du baccalauréat de référence. <strong>Lorsque la situation s'appuie sur d'autres disciplines, aucune connaissance relative à ces disciplines n'est exigible du candidat</strong> : toutes les informations utiles doivent être fournies dans l'énoncé.</p></div>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;background:#f0e8fa;border:1.5px solid #7a50b8;border-radius:10px;padding:12px 16px">
      <div style="background:#7a50b8;color:#fff;border-radius:50%;width:32px;height:32px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px;flex-shrink:0">5</div>
      <div><strong style="color:#7a50b8;font-size:13px">Préserver la neutralité des énoncés</strong><p style="font-size:12.5px;color:#555;margin-top:4px;line-height:1.55">Ne pas faire apparaître de prénoms ou de noms de protagonistes. Utiliser des personnages neutres : <em>« on »</em>, <em>« un étudiant »</em>, <em>« deux personnes »</em>…</p></div>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    Cadre réglementaire
  </h3>
  <style>
    .f31c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f31c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f31c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f31c:hover::before{opacity:1}
  </style>
  <div class="g2">
    <div class="f31c bx" style="background:transparent;border:1.5px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80">
      <strong style="display:flex;align-items:center;gap:6px">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b54070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
        CAP
      </strong>
      <p style="font-size:12.5px;margin-top:6px;line-height:1.6">Définition de l'épreuve de mathématiques et physique-chimie au CAP — <a href="https://www.education.gouv.fr/bo/19/Hebdo35/MENE1921757A.htm" target="_blank" rel="noopener" style="color:#1d9d80;text-decoration:none">BO n°35 du 26 septembre 2019</a></p>
    </div>
    <div class="f31c bx" style="background:transparent;border:1.5px solid #378add;border-left:3px solid #378add;--bar:#378add">
      <strong style="display:flex;align-items:center;gap:6px">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#b54070" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
        Baccalauréat professionnel
      </strong>
      <p style="font-size:12.5px;margin-top:6px;line-height:1.6">Unités générales et définition des modalités d'évaluation — <a href="https://www.education.gouv.fr/bo/20/Hebdo30/MENE2015195A.htm" target="_blank" rel="noopener" style="color:#378add;text-decoration:none">Arrêté du 17 juin 2020, JO n°0165 du 5 juillet 2020</a></p>
    </div>
  </div>
</div>

<div class="al gn">
  <div class="ai">
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg>
  </div>
  <div>
    <strong>Conseil terrain</strong><br>
    En relisant votre situation avant de la soumettre, trois questions peuvent guider la vérification : toutes les données nécessaires sont-elles fournies dans l'énoncé, y compris celles issues d'autres disciplines ? La situation fait-elle appel à des notions déjà travaillées en classe, accessibles aux élèves au moment de l'évaluation ? S'agit-il d'un vrai problème, une situation qui a du sens, qui pose une vraie question et non d'un habillage artificiel ? Faire relire le sujet par un collègue permet aussi de repérer les ambiguïtés de consignes que l'auteur ne voit plus.
  </div>
</div>
`},

'f37':{n:'F37',t:'La formulation de la problématique',s:'Fil conducteur du raisonnement de l\'élève',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    Rôle de la problématique
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    À la suite de la rédaction de la situation, il est nécessaire de <strong>problématiser l'objectif visé</strong> à l'aide d'une problématique. Celle-ci constituera le fil conducteur du raisonnement conduit par l'élève. Elle doit permettre à l'élève de <strong>s'approprier le problème posé</strong>, d'identifier clairement l'objectif de l'énoncé, et d'argumenter un raisonnement plutôt que de donner une réponse brute et subjective.
  </div>
  <div class="al gn" style="margin-top:10px">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
    <div>Une problématique <strong>n'est pas nécessairement formulée sous une forme interrogative</strong>. Elle peut débuter par : <em>« L'objectif de cet exercice est de… »</em> suivi d'un verbe d'action.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
    Verbes d'action à privilégier dans les problématiques
  </h3>
  <div class="bdg">
    <span>Déterminer</span><span>Distinguer</span><span>Établir</span><span>Étudier</span><span>Expliquer</span><span>Exploiter</span><span>Identifier</span><span>Interpréter</span><span>Justifier</span><span>Prévoir</span><span>Proposer</span><span>Utiliser</span><span>Représenter</span><span>Déduire</span><span>Exprimer</span><span>Indiquer</span><span>Vérifier</span><span>Analyser</span><span>Caractériser</span><span>Comparer</span><span>Modéliser</span><span>Estimer</span>
  </div>
  <p style="font-size:12.5px;color:var(--mid);line-height:1.6;margin-top:10px">Il convient d'<strong>expliciter ces verbes en amont des évaluations certificatives</strong> pour éviter que l'implicite et la polysémie soient une source de difficulté supplémentaire pour les élèves.</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    Quelques définitions clés
  </h3>
  <table class="tbl">
    <thead><tr><th>Verbe</th><th>Ce qu'il signifie en contexte scientifique</th></tr></thead>
    <tbody>
      <tr><td><strong style="color:#b54070">Comparer</strong></td><td>Mettre en évidence des différences ou ressemblances entre deux ou plusieurs éléments.</td></tr>
      <tr><td><strong style="color:#4a80c0">Interpréter</strong></td><td>Proposer une explication à partir des données disponibles.</td></tr>
      <tr><td><strong style="color:#1d9d80">Justifier</strong></td><td>Appuyer une réponse avec un raisonnement ou une donnée.</td></tr>
      <tr><td><strong style="color:#4e7d8a">Vérifier</strong></td><td>Contrôler qu'un résultat ou une affirmation est cohérent avec les données ou les lois.</td></tr>
      <tr><td><strong style="color:#7a5bb5">Modéliser</strong></td><td>Traduire une situation réelle en langage mathématique ou scientifique.</td></tr>
      <tr><td><strong style="color:#b54070">Déterminer</strong></td><td>Trouver une valeur, une formule ou un résultat par calcul ou raisonnement.</td></tr>
    </tbody>
  </table>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px">
    <a href="https://eduscol.education.fr/document/22675/download" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Verbes d'action en Physique-Chimie — Éduscol (PDF)
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Ces verbes d'action ne sont utiles que si les élèves en connaissent le sens précis. Prenez l'habitude de les utiliser régulièrement tout au long de l'année dans vos consignes de cours et d'exercices, pas seulement en évaluation certificative. Un élève qui a souvent « justifié » ou « vérifié » en classe sait instinctivement ce qu'on attend de lui le jour du CCF. Réservez quelques minutes en début d'année pour construire avec vos élèves un lexique commun de ces verbes, c'est un investissement qui lève une source de blocage récurrente.
  </div>
</div>
`},

'f38':{n:'F38',t:'La place de l\'expérimentation',s:'En mathématiques et en physique-chimie',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
    En mathématiques
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    La démarche expérimentale s'inscrit de manière <strong>transversale</strong> dans le cours de maths. Au moins un exercice doit comporter des questions nécessitant l'utilisation d'outils numériques, réalisées en présence de l'examinateur. La logique est celle de l'<strong>exploration</strong> : observer, formuler une conjecture, tester, généraliser. L'examinateur évalue non seulement le résultat, mais la façon dont l'élève utilise l'outil de manière <strong>pertinente et raisonnée</strong>.
  </div>
  <style>
    .f33c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f33c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f33c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f33c:hover::before{opacity:1}
  </style>
  <div class="g2" style="margin:10px 0">
    <div class="f33c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="12" y2="14"/></svg> Calculatrice / tableur</strong><span style="font-size:12px">Générer des valeurs, repérer une tendance, résoudre numériquement une équation, simuler une expérience aléatoire pour estimer une probabilité.</span></div>
    <div class="f33c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg> Logiciel (GeoGebra…)</strong><span style="font-size:12px">Explorer les paramètres d'une fonction, observer l'effet d'une transformation géométrique, visualiser une situation avant de la modéliser.</span></div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M9 3h6"/><path d="M10 3v5l-4 8a2 2 0 0 0 1.8 3h8.4a2 2 0 0 0 1.8-3l-4-8V3"/><line x1="8" y1="16" x2="16" y2="16"/></svg>
    En Physique-Chimie — 8 capacités évaluées
  </h3>
  <p style="font-size:12.5px;color:#555;line-height:1.6;margin:0 0 10px">Les situations d'évaluation doivent s'appuyer sur <strong>1 ou 2 activités expérimentales</strong> (1 ou plusieurs expériences, certaines peuvent être assistées par ordinateur).</p>
  <div class="g2">
    <div class="f33c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;font-size:12.5px;--bar:#4a80c0"><strong style="color:#4a80c0">① Vocabulaire / symboles</strong><br>Montrer qu'il connaît le vocabulaire, les symboles, les grandeurs et les unités.</div>
    <div class="f33c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;font-size:12.5px;--bar:#1d9d80"><strong style="color:#1d9d80">② Définitions / lois / modèles</strong><br>Utiliser des définitions, des lois et des modèles pour répondre aux questions posées.</div>
    <div class="f33c bx" style="background:transparent;border:1px solid #e8820a;border-left:3px solid #e8820a;font-size:12.5px;--bar:#e8820a"><strong style="color:#c06010">③ Relations quantitatives</strong><br>Utiliser une ou plusieurs relations quantitatives (données si non dans le programme).</div>
    <div class="f33c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;font-size:12.5px;--bar:#b54070"><strong style="color:#b54070">④ Protocole expérimental</strong><br>Proposer et mettre en œuvre un protocole expérimental.</div>
    <div class="f33c bx" style="background:transparent;border:1px solid #4e7d8a;border-left:3px solid #4e7d8a;font-size:12.5px;--bar:#4e7d8a"><strong style="color:#4e7d8a">⑤ Matériel</strong><br>Utiliser correctement le matériel mis à sa disposition.</div>
    <div class="f33c bx" style="background:transparent;border:1px solid #7a5bb5;border-left:3px solid #7a5bb5;font-size:12.5px;--bar:#7a5bb5"><strong style="color:#7a5bb5">⑥ Sécurité</strong><br>Mettre en œuvre les procédures et consignes de sécurité adaptées.</div>
    <div class="f33c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;font-size:12.5px;--bar:#1d9d80"><strong style="color:#1d9d80">⑦ Précision des mesures</strong><br>Estimer simplement la précision des mesures réalisées.</div>
    <div class="f33c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;font-size:12.5px;--bar:#b54070"><strong style="color:#b54070">⑧ Interpréter / valider / rendre compte</strong><br>Interpréter et valider les résultats des travaux réalisés et en rendre compte, notamment par écrit.</div>
  </div>
  <div class="al gn" style="margin-top:10px">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
    <div>En plus de ces 8 capacités, le candidat mobilise les <strong>5 compétences de la grille nationale</strong> (S, AR, RE, V, C) permettant à l'examinateur d'évaluer la maîtrise de la démarche expérimentale.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Ressource
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="http://www.pedagogie.ac-aix-marseille.fr/jcms/c_10896310/fr/upload/docs/application/pdf/2021-05/elements_de_reflexion_concernant_la_demarche_experimentale_pour_les_apprentissages_en_mathematiques.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Démarche expérimentale en mathématiques — Ac. Aix-Marseille (PDF)
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Les gestes expérimentaux s'évaluent au CCF mais se construisent tout au long de l'année : un élève qui n'a manipulé qu'une fois ou deux ne sera pas à l'aise le jour de l'évaluation. Vérifiez votre montage expérimental avant la séance, une panne de matériel ou un résultat aberrant le jour J perturbent l'élève et compliquent la notation. Préparez également vos élèves à l'appel : ce moment où ils présentent oralement leurs résultats à l'examinateur est souvent le plus anxiogène, s'y exercer en classe enlève beaucoup de pression.
  </div>
</div>
`},

'f39':{n:'F39',t:'Les grilles nationales',s:'Construction des sujets, barème critérié, usage au quotidien',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    L'utilisation des grilles nationales
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Les sujets d'examens doivent être construits à l'aide de la grille nationale d'évaluation. Il reviendra à l'examinateur le choix de la méthode à adopter pour évaluer le degré d'acquisition des compétences. Il convient de <strong>mobiliser toutes les compétences de cette grille</strong> lors de l'examen. La proportion envisagée pour chaque compétence est laissée au libre arbitre de l'examinateur, en veillant cependant à proposer un sujet fidèle aux composantes de la démarche scientifique.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><line x1="12" y1="3" x2="12" y2="21"/><path d="M3 6l9-3 9 3"/><path d="M6 12H3l3-6 3 6H6z"/><path d="M18 12h-3l3-6 3 6h-3z"/></svg>
    Évaluation objective : le barème critérié
  </h3>
  <p style="font-size:13px;line-height:1.6;margin:0 0 12px">Afin d'assurer une évaluation la plus objective possible, il est préconisé de <strong>rédiger des critères pour chaque question</strong> : un barème de notation critérié est donc à privilégier.</p>
  <style>
    .f34c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f34c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f34c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f34c:hover::before{opacity:1}
  </style>
  <div class="g2">
    <div class="f34c bx" style="background:transparent;border:1px solid #4e7d8a;border-left:3px solid #4e7d8a;--bar:#4e7d8a">
      <strong>Barème classique</strong><br>
      <span style="font-size:12px">Attribution de points par question. Moins précis pour évaluer le degré de maîtrise d'une compétence spécifique.</span>
    </div>
    <div class="f34c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80">
      <strong style="color:#1d9d80">Barème critérié — recommandé</strong><br>
      <span style="font-size:12px">Des critères explicites par question permettent d'obtenir une plus grande finesse lors de l'évaluation du niveau d'acquisition des compétences.</span>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    Usage quotidien recommandé
  </h3>
  <p style="font-size:13px;line-height:1.6;margin:0">L'utilisation au quotidien de la grille nationale de compétences est <strong>conseillée</strong> afin d'évaluer régulièrement l'acquisition de la maîtrise des compétences et pas seulement en examen. Il est rappelé que le baccalauréat professionnel n'est pas uniquement basé sur de l'<em>évaluation</em> par compétences mais s'appuie sur un <em>enseignement</em> par compétences.</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Ressources
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="https://cache.media.education.gouv.fr/file/28/09/7/ensel707_annexe3_1416097.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Grille nationale — Bac Pro (PDF officiel)
    </a>
    <a href="https://cache.media.education.gouv.fr/file/26/26/5/ensel838_annexeII_1302265.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Grille nationale — CAP (PDF officiel)
    </a>
    <a href="https://www.pedagogie.ac-aix-marseille.fr/jcms/c_10952541/fr/support-d-evaluation-et-de-notation-mpc" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Support d'évaluation et de notation MPC — Ac. Aix-Marseille
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Lisez la grille nationale une fois hors contexte d'examen : comprendre ce que recouvre chaque compétence (S, AR, RE, V, C) change la façon de construire ses séances et ses évaluations formatives. Le barème critérié peut sembler lourd à rédiger, mais il vous protège en cas de désaccord sur une note. Pour l'usage quotidien, ciblez une ou deux compétences par activité et dites-le aux élèves, ils s'approprient mieux ce qu'on évalue quand ils savent sur quoi ils sont observés.
  </div>
</div>
`},

'f40':{n:'F40',t:'Cas particulier des évaluations certificatives : le CCF',s:'Contrôle en Cours de Formation — modalités et organisation',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><polyline points="14 2 14 8 20 8"/><polyline points="16 13 12 17 8 13"/><line x1="12" y1="17" x2="12" y2="9"/></svg>
    Définition
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    En mathématiques et en physique-chimie, en lycée professionnel public et privé sous contrat, <strong>les évaluations certificatives sont organisées en Contrôle en Cours de Formation (CCF)</strong>. Ces contrôles permettent la délivrance du diplôme préparé et ont lieu principalement en fin d'année et/ou en fin de cycle.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    CCF Baccalauréat professionnel — Arrêté du 17 juin 2020
  </h3>
  <style>
    .ccf-badge{display:inline-flex;align-items:center;border-radius:20px;padding:5px 13px;font-size:12px;font-weight:800;white-space:nowrap;color:#fff}
    .ccf-pill{border-radius:10px;padding:7px 8px;font-size:12px;font-weight:800;text-align:center;color:#fff;line-height:1.3;min-width:64px}
    .ccf-card3{border-radius:12px;padding:12px 14px;font-size:12.5px;line-height:1.55;border-width:2px;border-style:solid;background:transparent}
    .ccf-sit{display:inline-block;border-radius:12px;padding:2px 9px;font-size:11px;font-weight:700;margin-bottom:6px}
    .ccf-4card{border-width:2px;border-style:solid;border-radius:12px;padding:12px;font-size:12px;line-height:1.5;background:transparent}
    .f35c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f35c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f35c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f35c:hover::before{opacity:1}
  </style>
  <div style="display:grid;grid-template-columns:1fr 80px 1fr;gap:8px 10px;align-items:stretch">
    <div style="display:flex;justify-content:flex-end;align-items:center"><span class="ccf-badge" style="background:#4a80c0">Mathématiques ▶</span></div>
    <div style="display:flex;flex-direction:column;align-items:center">
      <div class="ccf-pill" style="background:linear-gradient(160deg,#b0b8c8,#8090a8);align-self:center">2<sup>nde</sup></div>
      <div style="width:2px;flex:1;background:#ddd;min-height:8px"></div>
    </div>
    <div style="display:flex;justify-content:flex-start;align-items:center"><span class="ccf-badge" style="background:#b54070">◀ Physique-Chimie</span></div>

    <div class="ccf-card3" style="border-color:#4a80c0;text-align:center;font-style:italic;color:#555">Aucune évaluation certificative.</div>
    <div style="display:flex;justify-content:center"><div style="width:2px;background:#ddd;align-self:stretch"></div></div>
    <div class="ccf-card3" style="border-color:#b54070;text-align:center;font-style:italic;color:#555">Aucune évaluation certificative.</div>

    <div style="display:flex;justify-content:flex-end;align-items:center"><span class="ccf-badge" style="background:#e8820a">Mathématiques ▶</span></div>
    <div style="display:flex;flex-direction:column;align-items:center">
      <div style="width:2px;flex:1;background:#ddd;min-height:8px"></div>
      <div class="ccf-pill" style="background:linear-gradient(160deg,#e8a820,#c07010)">1<sup>ère</sup></div>
      <div style="width:2px;flex:1;background:#ddd;min-height:8px"></div>
    </div>
    <div style="display:flex;justify-content:flex-start;align-items:center"><span class="ccf-badge" style="background:#b54070">◀ Physique-Chimie</span></div>

    <div class="ccf-card3" style="border-color:#e8820a">
      <span class="ccf-sit" style="background:#fff0c8;color:#c07010">1ère situation ⊕</span><br>
      <strong>45 min — 10 pts</strong><br>Programme de 1<sup>ère</sup><br>
      <em style="font-size:11px;color:#999">Conseillée au 2<sup>ème</sup> semestre de 1<sup>ère</sup></em>
    </div>
    <div style="display:flex;justify-content:center"><div style="width:2px;background:#ddd;align-self:stretch"></div></div>
    <div class="ccf-card3" style="border-color:#b54070">
      <span class="ccf-sit" style="background:#fdd8dc;color:#b54070">1ère situation</span><br>
      <strong>60 min max — 10 pts</strong><br>Programme de 1<sup>ère</sup><br>
      <em style="font-size:11px;color:#999">Conseillée au 2<sup>ème</sup> semestre de 1<sup>ère</sup></em>
    </div>

    <div style="display:flex;justify-content:flex-end;align-items:center"><span class="ccf-badge" style="background:#1d9d80">Mathématiques ▶</span></div>
    <div style="display:flex;flex-direction:column;align-items:center">
      <div style="width:2px;flex:1;background:#ddd;min-height:8px"></div>
      <div class="ccf-pill" style="background:linear-gradient(160deg,#3aaa5a,#2a8a4a)">T<sup>ale</sup></div>
      <div style="width:2px;flex:1;background:#ddd;min-height:8px"></div>
    </div>
    <div style="display:flex;justify-content:flex-start;align-items:center"><span class="ccf-badge" style="background:#7a5bb5">◀ Physique-Chimie</span></div>

    <div class="ccf-card3" style="border-color:#1d9d80">
      <span class="ccf-sit" style="background:#c8ecd4;color:#1d9d80">2ème situation</span><br>
      <strong>45 min — 10 pts</strong><br>Programmes 1<sup>ère</sup> + Terminale<br>
      <em style="font-size:11px;color:#999">Conseillée au 2<sup>ème</sup> semestre de Terminale</em>
    </div>
    <div style="display:flex;justify-content:center"><div style="width:2px;background:#ddd;align-self:stretch"></div></div>
    <div class="ccf-card3" style="border-color:#7a5bb5">
      <span class="ccf-sit" style="background:#e8d0f0;color:#7a5bb5">2ème situation</span><br>
      <strong>60 min environ — 10 pts</strong><br>Programmes 1<sup>ère</sup> + Terminale<br>
      <em style="font-size:11px;color:#999">Conseillée au 2<sup>ème</sup> semestre de Terminale</em>
    </div>

    <div></div>
    <div style="display:flex;flex-direction:column;align-items:center">
      <div style="width:2px;flex:1;background:#ddd;min-height:8px"></div>
      <div class="ccf-pill" style="background:linear-gradient(160deg,#b54070,#7a1f45);padding:9px 8px">Bac Pro<br><em style="font-weight:400;font-size:10px">3 ans</em></div>
    </div>
    <div></div>
  </div>
  <p style="font-size:11.5px;color:var(--tlight);font-style:italic;margin-top:12px">⊕ Un exercice au moins comporte une ou deux questions dont la résolution se fait en présence de l'examinateur (simulation, algorithme, conjectures…)</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    CCF CAP — BO n° 35 du 29 septembre 2019
  </h3>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:10px 0;position:relative">
    <div class="ccf-4card" style="border-color:#1d9d80">
      <div style="font-weight:800;color:#1d9d80;font-size:12px;margin-bottom:4px">Mathématiques — 1ère année</div>
      <em style="color:#777;font-size:11px">Aucune évaluation certificative</em>
    </div>
    <div class="ccf-4card" style="border-color:#b54070">
      <div style="font-weight:800;color:#b54070;font-size:12px;margin-bottom:4px">Physique-Chimie — 1ère année</div>
      <em style="color:#777;font-size:11px">Aucune évaluation certificative</em>
    </div>
    <div class="ccf-4card" style="border-color:#e8820a;padding-bottom:44px">
      <div style="transform:translateX(10px)">
        <span class="ccf-sit" style="background:#fff0c8;color:#c07010;font-size:10px">Situation unique ⊕</span>
        <div style="font-weight:800;font-size:12px;margin:4px 0 3px">45 min — 12 pts</div>
        <div style="font-weight:800;color:#e8820a;font-size:12px">Mathématiques — 2ème année</div>
      </div>
    </div>
    <div class="ccf-4card" style="border-color:#4a80c0;padding-bottom:44px">
      <span class="ccf-sit" style="background:#d8e4f8;color:#4a80c0;font-size:10px">Situation unique</span>
      <div style="font-weight:800;font-size:12px;margin:4px 0 3px">45 min — 8 pts</div>
      <div style="font-weight:800;color:#4a80c0;font-size:12px">Physique-Chimie — 2ème année</div>
    </div>
    <div style="position:absolute;top:42%;left:50%;transform:translate(-50%,-50%);border-radius:50%;width:68px;height:68px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:#fff;text-align:center;line-height:1.2;z-index:2;box-shadow:0 2px 10px rgba(0,0,0,.2);background:linear-gradient(160deg,#4a80c0,#2a60a0)">
      <span style="font-size:13px;font-weight:900">CAP</span>
      <span style="font-size:9px;font-weight:400">2 ans</span>
    </div>
  </div>
  <p style="font-size:11.5px;color:var(--tlight);font-style:italic;margin-top:4px">⊕ Un exercice au moins comporte une ou deux questions dont la résolution se fait en présence de l'examinateur.</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    CCF BMA — BO n° 28 du 15 juillet 2021
  </h3>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;padding:10px 0;position:relative">
    <div class="ccf-4card" style="border-color:#1d9d80;padding-bottom:44px">
      <div style="font-weight:800;color:#1d9d80;font-size:12px;margin-bottom:4px">Mathématiques</div>
      <span class="ccf-sit" style="background:#c8ecd4;color:#1d9d80">1ère situation ⊕</span>
      <div style="font-weight:800;font-size:12px;margin:4px 0 2px">45 min environ — 10 pts</div>
      <em style="font-size:10.5px;color:#888">2<sup>ème</sup> sem. de la 1<sup>ère</sup> année</em>
    </div>
    <div class="ccf-4card" style="border-color:#b54070;padding-bottom:44px">
      <div style="transform:translateX(10px)">
        <div style="font-weight:800;color:#b54070;font-size:12px;margin-bottom:4px">Physique-Chimie</div>
        <span class="ccf-sit" style="background:#fdd8dc;color:#b54070">1ère situation</span>
        <div style="font-weight:800;font-size:12px;margin:4px 0 2px">45 min environ — 10 pts</div>
        <em style="font-size:10.5px;color:#888">2<sup>ème</sup> sem. de la 1<sup>ère</sup> année</em>
      </div>
    </div>
    <div class="ccf-4card" style="border-color:#e8820a;padding-bottom:44px">
      <div style="font-weight:800;color:#e8820a;font-size:12px;margin-bottom:4px">Mathématiques</div>
      <span class="ccf-sit" style="background:#fff0c8;color:#c07010">2ème situation ⊕</span>
      <div style="font-weight:800;font-size:12px;margin:4px 0 2px">45 min environ — 10 pts</div>
      <em style="font-size:10.5px;color:#888">2<sup>ème</sup> sem. de la 2<sup>ème</sup> année</em>
    </div>
    <div class="ccf-4card" style="border-color:#7a5bb5;padding-bottom:44px">
      <div style="transform:translateX(10px)">
        <div style="font-weight:800;color:#7a5bb5;font-size:12px;margin-bottom:4px">Physique-Chimie</div>
        <span class="ccf-sit" style="background:#e8d0f0;color:#7a5bb5">2ème situation</span>
        <div style="font-weight:800;font-size:12px;margin:4px 0 2px">45 min environ — 10 pts</div>
        <em style="font-size:10.5px;color:#888">2<sup>ème</sup> sem. de la 2<sup>ème</sup> année</em>
      </div>
    </div>
    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:50%;width:68px;height:68px;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:13px;font-weight:800;color:#fff;text-align:center;line-height:1.2;z-index:2;box-shadow:0 2px 10px rgba(0,0,0,.2);background:linear-gradient(160deg,#7a5bb5,#5a3fa0)">
      <span style="font-size:14px;font-weight:900">BMA</span>
      <span style="font-size:10px;font-weight:400">2 ans</span>
    </div>
  </div>
  <p style="font-size:11.5px;color:var(--tlight);font-style:italic;margin-top:4px">⊕ Un exercice au moins comporte une ou deux questions dont la résolution se fait en présence de l'examinateur.</p>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    Les appels de l'examinateur durant les épreuves
  </h3>
  <div class="g2">
    <div class="f35c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong>En mathématiques</strong><span style="font-size:12px;display:block;margin-top:4px">Chaque situation doit comporter au moins un appel examinateur pour évaluer la capacité à expérimenter, utiliser une simulation, mettre en œuvre un algorithme ou émettre des conjectures. Un 2<sup>ème</sup> appel peut être prévu en début d'épreuve pour vérifier l'appropriation de la situation.</span></div>
    <div class="f35c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong>En physique-chimie</strong><span style="font-size:12px;display:block;margin-top:4px">Chaque situation peut comporter deux ou trois appels examinateur : un appel d'appropriation en début d'épreuve, puis un ou deux appels pour vérifier les capacités expérimentales du candidat.</span></div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    Absences aux CCF
  </h3>
  <div class="al rd">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
    <div>La recevabilité du motif d'absence à une situation de CCF est à <strong>l'appréciation du chef de centre d'examens et non des enseignants</strong>.<br><em>(Note diffusée le 9 janvier 2012, valable pour toutes les disciplines.)</em><br><br>Si votre chef d'établissement estime le motif recevable, vous devez <strong>reconvoquer l'élève absent</strong>.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Ressources
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="https://www.pedagogie.ac-aix-marseille.fr/upload/docs/application/pdf/2026-02/lettre_de_cadrage_des_inspecteurs_pour_la_mise_en_oeuvre_du_ccf_en_mathematiques_physique-chimie.pdf" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Courrier de cadrage inspecteurs MPC — nouvelles modalités CCF
    </a>
    <a href="https://eduscol.education.fr/785/controle-en-cours-de-formation" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Contrôle en cours de formation — Éduscol
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Le CCF ne se planifie pas comme un contrôle classique : il doit intervenir quand les élèves sont prêts, une fois le programme de la période suffisamment travaillé. Respectez les fenêtres réglementaires (2<sup>ème</sup> semestre de 1<sup>ère</sup> et de Terminale), mais à l'intérieur de ces fenêtres, c'est votre appréciation pédagogique qui prime. Construisez des situations qui couvrent plusieurs thèmes du programme, un CCF portant sur un seul chapitre ne reflète pas la richesse des compétences attendues. Intégrez dès la conception du sujet la question dédiée à l'appel examinateur : elle doit ouvrir sur une démarche (simulation, algorithme, conjecture) et non simplement vérifier un résultat.
  </div>
</div>
`},

'f41':{n:'F41',t:"Ressources pédagogiques pour l'enseignement MPC",s:'Sites incontournables — à consulter avant de solliciter qui que ce soit',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    Principe essentiel
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Consultez ces ressources <strong>avant de solliciter toute autre personne</strong> : elles répondent à la grande majorité des questions liées à la prise de fonction. Consultez aussi régulièrement votre <strong>messagerie professionnelle</strong>, c'est le canal officiel par lequel le corps d'inspection vous transmet documents et informations.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Sites de référence
  </h3>
  <div class="al gn" style="margin-bottom:12px">
    <div class="ai"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
    <div><strong>Votre référence principale</strong> — à consulter en premier pour toute question pédagogique ou institutionnelle :</div>
  </div>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:4px">
    <a href="https://pedagogie.ac-lille.fr/maths-physique-chimie/category/actualites/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      ★ Site académique MPC — Académie de Lille ★  VOTRE RÉFÉRENCE PRINCIPALE
    </a>
  </div>
  <div style="margin-top:12px;margin-bottom:6px;font-weight:700;font-size:13px;color:var(--tmed)">Programmes et ressources nationales</div>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="https://eduscol.education.fr/1793/programmes-et-ressources-en-mathematiques-voie-professionnelle" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Programmes et ressources en mathématiques — voie professionnelle
    </a>
    <a href="https://eduscol.education.fr/1795/programmes-et-ressources-en-physique-chimie-voie-professionnelle" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Programmes et ressources en physique-chimie — voie professionnelle
    </a>
    <a href="https://www.education.gouv.fr/le-referentiel-de-competences-des-metiers-du-professorat-et-de-l-education-5753" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Référentiel de compétences des métiers du professorat et de l'éducation
    </a>
    <a href="https://eduscol.education.fr/1137/ecole-inclusive" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      École inclusive — PAI, PPRE, PAP et PPS
    </a>
  </div>
  <div style="margin-top:12px;margin-bottom:6px;font-weight:700;font-size:13px;color:var(--tmed)">Ressources pratiques et outils</div>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="https://pedagogie.ac-lille.fr/maths-physique-chimie/reperes-pour-lap/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Livret algorithmique et programmation Python — voie professionnelle
    </a>
    <a href="https://www.pedagogie.ac-aix-marseille.fr/jcms/c_10952541/fr/support-d-evaluation-et-de-notation-mpc" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Support d'évaluation et de notation MPC
    </a>
    <a href="https://eduscol.education.fr/document/1911/download" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Vadémécum « Consolidation des acquis et accompagnement personnalisé »
    </a>
    <a href="https://pedagogie.ac-lille.fr/maths-physique-chimie/mise-en-oeuvre-des-modules-daide-a-lorientation-en-classe-de-terminale-bac-pro/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Modules d'aide à l'orientation en Terminale Bac Pro
    </a>
    <a href="https://www.reseau-canope.fr/premiers-pas-dans-le-metier-denseignant.html" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Réseau Canopé — Plateforme dédiée aux nouveaux enseignants
    </a>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
    Vidéos — Conditions favorisant les apprentissages
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="https://youtu.be/_K5Yas1mE0g" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      La coopération
    </a>
    <a href="https://youtu.be/RZYfqVqSYz0" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Le climat scolaire
    </a>
    <a href="https://youtu.be/H97lBOO30B0" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Impliquer les élèves dans les apprentissages
    </a>
    <a href="https://youtu.be/9jpH7vlb7E8" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Renforcer l'attention
    </a>
    <a href="https://youtu.be/99VWQ6W51PU" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Créativité et design thinking
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Ajoutez le site académique MPC de votre académie en <strong>favori dès votre première semaine</strong>. Vérifiez également votre messagerie professionnelle au moins une fois par jour ouvré, certaines communications des IEN ou du rectorat ont un délai de réponse attendu. Si vous ne trouvez pas une réponse sur ces sites, sollicitez un collègue de confiance dans votre établissement <em>avant</em> de contacter directement l'inspection.
  </div>
</div>
`},

'f42':{n:'F42',t:'La démarche scientifique',s:'Méthode rigoureuse de construction du savoir scientifique',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
    Définition
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    La démarche scientifique est la méthode rigoureuse utilisée pour comprendre et expliquer le monde. Elle souligne la <strong>non-linéarité du chemin suivi</strong>, ce n'est pas une méthode qui décrit un chemin unique, mais un processus de construction d'un raisonnement logique et argumenté, appuyé sur les <strong>cinq compétences de la grille nationale</strong>.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>
    Le cycle de la démarche scientifique
  </h3>
  <style>
    .ds32{transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .2s ease;cursor:default;border-radius:10px}
    .ds32:hover{transform:translateY(-4px);box-shadow:0 8px 20px rgba(0,0,0,.16)}
    .f37c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f37c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f37c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f37c:hover::before{opacity:1}
  </style>
  <div style="position:relative;margin:0 auto 16px;max-width:500px">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      <div class="ds32" style="background:transparent;border:1.5px solid #4a80c0;border-left:4px solid #4a80c0;padding:11px 14px">
        <div style="font-weight:800;font-size:12.5px;color:#4a80c0"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg> Observation d'un phénomène</div>
      </div>
      <div class="ds32" style="background:transparent;border:1.5px solid #4e7d8a;border-left:4px solid #4e7d8a;padding:11px 14px">
        <div style="font-weight:800;font-size:12.5px;color:#4e7d8a"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Questionnement</div>
        <div style="font-size:11.5px;color:#555;margin-top:3px">Formulation d'une question claire, précise, testable et susceptible de faire l'objet d'une recherche.</div>
      </div>
      <div class="ds32" style="background:transparent;border:1.5px solid #1d9d80;border-left:4px solid #1d9d80;padding:11px 14px">
        <div style="font-weight:800;font-size:12.5px;color:#1d9d80"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg> Formulation d'hypothèses</div>
        <div style="font-size:11.5px;color:#555;margin-top:3px">Propositions testables à partir des observations et du questionnement.</div>
      </div>
      <div class="ds32" style="background:transparent;border:1.5px solid #e8820a;border-left:4px solid #e8820a;padding:11px 14px">
        <div style="font-weight:800;font-size:12.5px;color:#c06010"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 3v5l-4 8a2 2 0 0 0 1.8 3h8.4a2 2 0 0 0 1.8-3l-4-8V3"/><line x1="8" y1="16" x2="16" y2="16"/></svg> Expérimentation</div>
        <div style="font-size:11.5px;color:#555;margin-top:3px">Conception et réalisation d'une expérience · définir les variables · collecter des données · contrôler les facteurs.</div>
      </div>
      <div class="ds32" style="background:transparent;border:1.5px solid #7a5bb5;border-left:4px solid #7a5bb5;padding:11px 14px">
        <div style="font-weight:800;font-size:12.5px;color:#7a5bb5"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> Analyse des données</div>
        <div style="font-size:11.5px;color:#555;margin-top:3px">Quantitative ou qualitative, pour déterminer si les données soutiennent ou réfutent l'hypothèse.</div>
      </div>
      <div class="ds32" style="background:transparent;border:1.5px solid #b54070;border-left:4px solid #b54070;padding:11px 14px">
        <div style="font-weight:800;font-size:12.5px;color:#b54070"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> Interprétation des résultats</div>
        <div style="font-size:11.5px;color:#555;margin-top:3px">Les résultats confirment-ils, infirment-ils l'hypothèse, ou nécessitent-ils des recherches supplémentaires ?</div>
      </div>
    </div>
    <div class="ds32" style="background:transparent;border:1.5px solid #4a80c0;border-left:4px solid #4a80c0;padding:11px 14px;margin-top:8px;text-align:center">
      <div style="font-weight:800;font-size:12.5px;color:#4a80c0"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg> Communication des résultats</div>
      <div style="font-size:11.5px;color:#555;margin-top:3px">Présentation de la démarche et des conclusions à la communauté scientifique ou à la classe.</div>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    Les 3 dimensions de la formation à la démarche scientifique
  </h3>
  <div class="g2">
    <div class="f37c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong>Connaissances de contenu</strong><span style="font-size:12px;display:block;margin-top:3px">Notions, théories, faits relevant de disciplines scientifiques particulières.</span></div>
    <div class="f37c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong>Connaissances procédurales</strong><span style="font-size:12px;display:block;margin-top:3px">Concepts et procédures essentiels à la démarche (collecte, analyse, interprétation).</span></div>
    <div class="f37c bx" style="background:transparent;border:1px solid #7a5bb5;border-left:3px solid #7a5bb5;--bar:#7a5bb5"><strong>Épistémologie</strong><span style="font-size:12px;display:block;margin-top:3px">Nature de la science, rôle des hypothèses, du doute et de la réfutabilité dans la construction du savoir.</span></div>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    La démarche scientifique n'est pas une séquence rigide à appliquer étape par étape en classe. Utilisez-la comme <strong>cadre de référence</strong> pour structurer vos séances : montrez aux élèves qu'ils font de la science chaque fois qu'ils observent, formulent une hypothèse et la testent. La dimension "communication des résultats" est souvent négligée, prenez le temps de faire restituer par les élèves, à l'oral ou à l'écrit, ce qu'ils ont découvert.
  </div>
</div>
`},

'f43':{n:'F43',t:'La démarche expérimentale',s:'Conjecture, expérience, validation ou réfutation — va-et-vient théorie/pratique',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"/></svg>
    Définition
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    La démarche expérimentale vérifie par l'expérience les hypothèses émises après la constatation de faits. Elle se base sur la formulation d'hypothèses (ou de conjectures) et la réalisation d'expériences. Son trait distinctif : le <strong>va-et-vient entre théorie et expérience</strong>, une hypothèse non validée relance le cycle.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    Les étapes de la démarche expérimentale (selon PERRIN)
  </h3>
  <style>
    .de33{transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .2s ease;cursor:default;border-radius:10px}
    .de33:hover{transform:translateX(6px);box-shadow:4px 6px 18px rgba(0,0,0,.14)}
    .f38c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f38c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f38c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f38c:hover::before{opacity:1}
  </style>
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px">
    <div class="de33" style="background:transparent;border:1.5px solid #4a80c0;border-left:4px solid #4a80c0;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#4a80c0">
        <svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6"/><path d="M10 3v5l-4 8a2 2 0 0 0 1.8 3h8.4a2 2 0 0 0 1.8-3l-4-8V3"/><line x1="8" y1="16" x2="16" y2="16"/></svg>
        Expérience
      </div>
    </div>
    <div style="text-align:center;font-size:18px;color:#ccc;line-height:1">↓</div>
    <div class="de33" style="background:transparent;border:1.5px solid #4e7d8a;border-left:4px solid #4e7d8a;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#4e7d8a">
        <svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        Observation de l'expérience
      </div>
    </div>
    <div style="text-align:center;font-size:18px;color:#ccc;line-height:1">↓</div>
    <div class="de33" style="background:transparent;border:1.5px solid #1d9d80;border-left:4px solid #1d9d80;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#1d9d80">
        <svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg>
        Formulation de conjectures
      </div>
      <div style="font-size:12px;margin-top:3px;color:#555">(ou d'hypothèses selon la discipline)</div>
    </div>
    <div style="text-align:center;font-size:18px;color:#ccc;line-height:1">↓</div>
    <div class="de33" style="background:transparent;border:1.5px solid #e8820a;border-left:4px solid #e8820a;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#c06010">
        <svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><path d="M3 6l9-3 9 3"/><path d="M6 12H3l3-6 3 6H6z"/><path d="M18 12h-3l3-6 3 6h-3z"/></svg>
        Tentative de preuve : validation ou réfutation
      </div>
      <div style="font-size:12px;margin-top:4px;color:#555">
        <strong style="color:#1d9d80">Validation</strong> → La conjecture est confirmée.<br>
        <strong style="color:#b54070">Réfutation</strong> → Nouvelle émission d'hypothèses → le processus est réitéré.
      </div>
    </div>
    <div style="text-align:center;font-size:18px;color:#ccc;line-height:1">↓ (en cas de réfutation)</div>
    <div class="de33" style="background:transparent;border:1.5px solid #b54070;border-left:4px solid #b54070;padding:11px 16px">
      <div style="font-weight:800;font-size:13px;color:#b54070">
        <svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.51"/></svg>
        Contre-expérience · production de contre-exemples
      </div>
      <div style="font-size:12px;margin-top:3px;color:#555">→ Formulation de nouvelles conjectures → Nouvelle tentative de preuve</div>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    Expérimentation vs Manipulation — quelle distinction ?
  </h3>
  <div class="g2">
    <div class="f38c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong>Expérimentation</strong><span style="font-size:12px;display:block;margin-top:3px">Méthode scientifique : éprouver par des expériences répétées la validité d'une hypothèse. On essaye, on teste, on élabore un protocole, on valide ou réfute. <em>« Soumettre nos hypothèses au tribunal de l'expérience. »</em></span></div>
    <div class="f38c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong>Manipulation</strong><span style="font-size:12px;display:block;margin-top:3px">Mise en activité de l'élève pour suivre ou découvrir un protocole. Se déroule souvent <em>en amont</em> de l'expérimentation proprement dite.</span></div>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    En LP, la manipulation est bien maîtrisée par les élèves qui ont souvent l'habitude du geste technique. Exploitez cet avantage en les poussant vers l'étape <strong>formulation de conjectures</strong> : "et selon toi, que va-t-il se passer si on change ce paramètre ?" Même une conjecture fausse est précieuse pour l'apprentissage, la réfutation est au cœur de la démarche. Évitez de corriger immédiatement : laissez l'expérience parler.
  </div>
</div>
`},

'f44':{n:'F44',t:'La démarche mathématique',s:'Exploration, conjecture, preuve et réfutation — conditions nécessaires en classe',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><line x1="3" y1="3" x2="21" y2="3"/><line x1="3" y1="9" x2="18" y2="9"/><line x1="3" y1="15" x2="14" y2="15"/><line x1="3" y1="21" x2="10" y2="21"/></svg>
    Définition
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    La démarche mathématique est une méthode d'exploration et de résolution de problèmes basée sur la réflexion, le raisonnement et la justification dans un contexte spécifique, si possible professionnel. Elle consiste à <strong>poser des questions, faire des conjectures, chercher des preuves</strong>. Le va-et-vient entre émission de conjectures et validation la caractérise.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    Les 5 étapes de la démarche mathématique (non linéaires)
  </h3>
  <style>
    .dm34{transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .2s ease;cursor:default;border-radius:8px}
    .dm34:hover{transform:translateX(4px);box-shadow:3px 5px 14px rgba(0,0,0,.12)}
  </style>
  <div style="display:flex;flex-direction:column;gap:0;margin-bottom:10px">
    <div class="dm34" style="background:transparent;border:1.5px solid #e8820a;border-left:4px solid #e8820a;padding:9px 12px">
      <div style="font-weight:800;font-size:12.5px;color:#c06010">① Analyse et compréhension du problème</div>
      <ul style="margin:4px 0 0 14px;font-size:11.5px;color:#555;line-height:1.55">
        <li>Identification et compréhension du problème dans le contexte donné</li>
        <li>Prise en compte des informations pertinentes et des contraintes spécifiques</li>
        <li>Formulation des conjectures, émission des propositions</li>
      </ul>
    </div>
    <div style="text-align:center;font-size:12px;color:#bbb;line-height:1.2">↓</div>
    <div class="dm34" style="background:transparent;border:1.5px solid #4a80c0;border-left:4px solid #4a80c0;padding:9px 12px">
      <div style="font-weight:800;font-size:12.5px;color:#4a80c0">② Recherche de stratégies et d'outils</div>
      <div style="font-size:11.5px;color:#555;margin-top:3px;line-height:1.55">Exploration des différentes stratégies et outils mathématiques : formules, techniques de calcul ou schémas de raisonnement.</div>
    </div>
    <div style="text-align:center;font-size:12px;color:#bbb;line-height:1.2">↓</div>
    <div class="dm34" style="background:transparent;border:1.5px solid #1d9d80;border-left:4px solid #1d9d80;padding:9px 12px">
      <div style="font-weight:800;font-size:12.5px;color:#1d9d80">③ Exploration, manipulation, modélisation et expérimentation</div>
      <ul style="margin:4px 0 0 14px;font-size:11.5px;color:#555;line-height:1.55">
        <li>Test des différentes approches</li>
        <li>Réalisation des calculs, des graphiques ou d'autres manipulations</li>
        <li>Recherche d'une correspondance avec un modèle mathématique approprié</li>
      </ul>
    </div>
    <div style="text-align:center;font-size:12px;color:#bbb;line-height:1.2">↓</div>
    <div class="dm34" style="background:transparent;border:1.5px solid #7a5bb5;border-left:4px solid #7a5bb5;padding:9px 12px">
      <div style="font-weight:800;font-size:12.5px;color:#7a5bb5">④ Raisonnement et interprétation</div>
      <ul style="margin:4px 0 0 14px;font-size:11.5px;color:#555;line-height:1.55">
        <li>Analyse et interprétation des résultats en lien avec le contexte professionnel</li>
        <li>Évaluation de la pertinence et de la signification des résultats</li>
        <li>Justification des étapes, des choix et des réponses</li>
      </ul>
    </div>
    <div style="text-align:center;font-size:12px;color:#bbb;line-height:1.2">↓</div>
    <div class="dm34" style="background:transparent;border:1.5px solid #b54070;border-left:4px solid #b54070;padding:9px 12px">
      <div style="font-weight:800;font-size:12.5px;color:#b54070">⑤ Communication et formalisation des résultats</div>
      <ul style="margin:4px 0 0 14px;font-size:11.5px;color:#555;line-height:1.55">
        <li>Présentation des solutions de manière claire, précise et organisée</li>
        <li>Utilisation des notations mathématiques appropriées</li>
        <li>Justification de la démarche et interprétation dans le contexte</li>
      </ul>
    </div>
  </div>
  <div class="al gn">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
    <div>Pour caractériser une vraie démarche mathématique : <strong>choix des énoncés</strong> · <strong>vrai temps de recherche</strong> · <strong>responsabilité scientifique dévolue à la classe</strong> · <strong>engagement et interaction sociale</strong>. La démarche s'appuie sur les <strong>5 compétences de la grille nationale</strong>.</div>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    L'étape ① est souvent bâclée au profit des étapes de calcul. Pourtant, c'est elle qui <strong>détermine si les élèves comprennent ce qu'on leur demande</strong>, un mauvais démarrage condamne toute la résolution. Prenez le temps de reformuler le problème avec eux, en langue naturelle, avant d'ouvrir le cahier. Et à l'étape ⑤, ne faites pas la communication vous-même : c'est l'élève qui doit expliquer sa démarche, même imparfaitement.
  </div>
</div>
`},

'f45':{n:'F45',t:'PAP, PAI, PPS, PPRE : Quels aménagements pour quels besoins ?',s:'Plans d\'accompagnement et de scolarisation — repères pour l\'enseignant',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    Pourquoi ces plans existent
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Certains élèves ont des besoins éducatifs particuliers qui nécessitent des aménagements ou des adaptations pédagogiques. Quatre dispositifs coexistent selon la nature et la durée des difficultés : <strong>PPRE, PAI, PAP, PPS</strong>. En tant qu'enseignant, vous pouvez être amené à les mettre en œuvre, même si vous ne les rédigez pas toujours vous-même.
  </div>
  <table class="tbl" style="margin-top:10px">
    <thead>
      <tr>
        <th style="width:18%">Dispositif</th>
        <th style="width:22%">Pour qui ?</th>
        <th style="width:28%">Qui le rédige ?</th>
        <th>Votre rôle</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong style="color:#4a80c0">PPRE</strong><br><span style="font-size:11px;color:var(--tlight)">Programme Personnalisé<br>de Réussite Éducative</span></td>
        <td style="font-size:12px">Difficultés scolaires ponctuelles — pas de trouble reconnu</td>
        <td style="font-size:12px">Équipe pédagogique + chef d'établissement. Révisable.</td>
        <td style="font-size:12px">Appliquer les adaptations définies, participer au bilan.</td>
      </tr>
      <tr>
        <td><strong style="color:#e8820a">PAI</strong><br><span style="font-size:11px;color:var(--tlight)">Projet d'Accueil<br>Individualisé</span></td>
        <td style="font-size:12px">Maladie chronique, allergie (asthme, diabète, épilepsie…)</td>
        <td style="font-size:12px">Chef d'établissement + médecin scolaire + famille.</td>
        <td style="font-size:12px">Connaître le PAI, savoir alerter en cas de malaise.</td>
      </tr>
      <tr>
        <td><strong style="color:#1d9d80">PAP</strong><br><span style="font-size:11px;color:var(--tlight)">Plan d'Accompagnement<br>Personnalisé</span></td>
        <td style="font-size:12px">Troubles dys, TDAH — sans reconnaissance MDPH</td>
        <td style="font-size:12px">Équipe péda + médecin scolaire. Renouvelé chaque année.</td>
        <td style="font-size:12px"><strong>Obligatoire</strong> : tiers-temps, supports adaptés dans toutes les disciplines, y compris MPC.</td>
      </tr>
      <tr>
        <td><strong style="color:#7a5bb5">PPS</strong><br><span style="font-size:11px;color:var(--tlight)">Projet Personnalisé<br>de Scolarisation</span></td>
        <td style="font-size:12px">Handicap reconnu MDPH</td>
        <td style="font-size:12px">MDPH + enseignant référent. Révisé chaque année (ESS).</td>
        <td style="font-size:12px">Participer à l'ESS, appliquer les adaptations. <strong>Remplace PAP et PPRE.</strong></td>
      </tr>
    </tbody>
  </table>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    Logique de progressivité
  </h3>
  <style>
    .f40c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f40c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f40c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f40c:hover::before{opacity:1}
  </style>
  <div class="f40c bx" style="background:transparent;border:1px solid #4e7d8a;border-left:3px solid #4e7d8a;font-size:12.5px;line-height:1.9;--bar:#4e7d8a">
    <strong>Difficultés passagères</strong> → <span style="color:#4a80c0;font-weight:700">PPRE</span> (court terme, pédagogique)<br>
    <strong>Maladie chronique</strong> → <span style="color:#e8820a;font-weight:700">PAI</span> (santé, protocoles médicaux)<br>
    <strong>Troubles dys / TDAH sans MDPH</strong> → <span style="color:#1d9d80;font-weight:700">PAP</span> (adaptations pédagogiques durables)<br>
    <strong>Handicap reconnu MDPH</strong> → <span style="color:#7a5bb5;font-weight:700">PPS</span> (dispositif global, remplace les autres)
    <div style="margin-top:6px;font-size:11.5px;color:#888;font-style:italic">Ces plans ne se cumulent pas : le PPS remplace le PAP ou le PPRE s'il était en cours.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    Vos interlocuteurs clés
  </h3>
  <div class="g2">
    <div class="f40c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong>Professeur principal</strong><span style="font-size:12px;display:block;margin-top:3px">Coordonne la mise en œuvre des plans (PAP, PPRE) dans l'équipe pédagogique.</span></div>
    <div class="f40c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong>Médecin scolaire</strong><span style="font-size:12px;display:block;margin-top:3px">Valide le PAP, établit le PAI avec le chef d'établissement.</span></div>
    <div class="f40c bx" style="background:transparent;border:1px solid #7a5bb5;border-left:3px solid #7a5bb5;--bar:#7a5bb5"><strong>Enseignant référent</strong><span style="font-size:12px;display:block;margin-top:3px">Coordonne le PPS, anime la réunion ESS, fait le lien avec la MDPH.</span></div>
    <div class="f40c bx" style="background:transparent;border:1px solid #e8820a;border-left:3px solid #e8820a;--bar:#e8820a"><strong>Chef d'établissement</strong><span style="font-size:12px;display:block;margin-top:3px">Responsable de l'élaboration et de la transmission des plans. Premier interlocuteur en cas de doute.</span></div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Ressources
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="https://www.education.gouv.fr/bo/15/Hebdo5/MENE1501296C.htm" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Circulaire PAP — BO n°5 2015
    </a>
    <a href="https://eduscol.education.fr/1137/ecole-inclusive" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      École inclusive — Éduscol
    </a>
    <a href="https://www.monparcourshandicap.gouv.fr/scolarite/ppre-pai-pap-pps-en-quoi-consistent-les-differentes-possibilites-dappui-la-scolarisation" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      PPRE, PAI, PAP, PPS — monparcourshandicap.gouv.fr
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    En début d'année, le professeur principal vous informera si certains élèves sont sous PAP ou PPS. Si vous percevez des difficultés inhabituelles (lenteur d'exécution, erreurs de type inhabituel, difficultés à lire les consignes) signalez-les au professeur principal ou au médecin scolaire. Et si un élève a un PAP, les aménagements s'appliquent dans <strong>toutes les disciplines</strong>, y compris en MPC.
  </div>
</div>
`},

'f46':{n:'F46',t:'Conception Universelle des Apprentissages',s:'Rendre ses cours accessibles sans tout révolutionner',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>
    L'idée en une phrase
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    La <strong>Conception Universelle des Apprentissages</strong> consiste à anticiper les obstacles avant qu'ils n'apparaissent, pas un cours différent pour chaque élève, mais <strong>plusieurs portes d'entrée</strong> pour apprendre, s'entraîner et montrer ce que l'on a compris.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 8h8"/><path d="M8 12h8"/><path d="M8 16h5"/></svg>
    Les 3 réflexes CUA
  </h3>
  <style>
    .cua-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:6px}
    .cua-card{border-radius:13px;overflow:hidden;background:#fff;border:1px solid var(--slight);box-shadow:0 2px 8px rgba(181,64,112,.08)}
    .cua-head{padding:12px 13px;color:#fff;text-align:center;font-weight:800;font-size:13px;line-height:1.4}
    .cua-body{padding:12px 13px;font-size:12.2px;line-height:1.55;color:var(--tmid)}
    .cua-body strong{color:var(--tdark)}
    .cua-pink .cua-head{background:linear-gradient(135deg,#b54070,#d4789a)}
    .cua-blue .cua-head{background:linear-gradient(135deg,#4386b8,#75afd6)}
    .cua-green .cua-head{background:linear-gradient(135deg,#1d9d80,#4ec4a4)}
    .cua-ex{margin-top:8px;padding:8px 10px;border-radius:9px;background:rgba(252,232,242,.55);font-size:11.5px}
    .cua-blue .cua-ex{background:#e8f4fb}
    .cua-green .cua-ex{background:#eaf6ed}
    .cua-mini{font-size:20px;margin-bottom:4px}
    @media(max-width:760px){.cua-grid{grid-template-columns:1fr}}
    .f41c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f41c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f41c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f41c:hover::before{opacity:1}
  </style>
  <div class="cua-grid">
    <div class="cua-card cua-pink">
      <div class="cua-head">
        <div class="cua-mini"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div>
        QUOI ?<br>Représenter autrement
      </div>
      <div class="cua-body">
        <strong>Objectif :</strong> aider les élèves à accéder à l'information.<br><br>
        Varier les supports : texte court, schéma, oral, image, vidéo, manipulation, code couleur.
        <div class="cua-ex"><strong>En MPC :</strong> une formule accompagnée d'un schéma annoté, d'un exemple numérique et d'une verbalisation simple.</div>
      </div>
    </div>
    <div class="cua-card cua-blue">
      <div class="cua-head">
        <div class="cua-mini"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg></div>
        COMMENT ?<br>Agir et s'exprimer
      </div>
      <div class="cua-body">
        <strong>Objectif :</strong> permettre aux élèves de montrer ce qu'ils savent faire.<br><br>
        Proposer plusieurs façons de répondre : écrit, oral, schéma, tableau, carte mentale, manipulation ou production numérique.
        <div class="cua-ex"><strong>En maths :</strong> expliquer une résolution à l'oral avant de passer à une rédaction plus formalisée.</div>
      </div>
    </div>
    <div class="cua-card cua-green">
      <div class="cua-head">
        <div class="cua-mini"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
        POURQUOI ?<br>Engager les élèves
      </div>
      <div class="cua-body">
        <strong>Objectif :</strong> donner du sens et maintenir l'effort.<br><br>
        Situations concrètes, choix, défis progressifs, travail en binôme, retours réguliers.
        <div class="cua-ex"><strong>En LP :</strong> relier à un geste professionnel de la spécialité des élèves.</div>
      </div>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
    10 gestes pour demain matin
  </h3>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 10px;margin-top:4px;font-size:11.5px">
    <div><strong>1.</strong> Annoncer l'objectif de séance.</div>
    <div><strong>6.</strong> Varier les supports (texte, schéma, oral).</div>
    <div><strong>2.</strong> Segmenter les consignes en étapes.</div>
    <div><strong>7.</strong> Faire reformuler par un élève.</div>
    <div><strong>3.</strong> Rendre l'implicite explicite.</div>
    <div><strong>8.</strong> Prévoir un guidage progressif.</div>
    <div><strong>4.</strong> Clarifier le vocabulaire et les notations.</div>
    <div><strong>9.</strong> Laisser parfois un choix à l'élève.</div>
    <div><strong>5.</strong> Ajouter un exemple avant de laisser seuls.</div>
    <div><strong>10.</strong> Valoriser la démarche, pas que le résultat.</div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>
    Exemple : améliorer une consigne
  </h3>
  <div class="g2">
    <div class="f41c bx" style="background:transparent;border:1px solid #b54070;border-left:4px solid #b54070;padding:8px 10px;--bar:#b54070">
      <strong style="color:#b54070;font-size:12px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Peu accessible</strong><br>
      <span style="font-size:11.5px;font-style:italic;color:var(--tmid)">« Résoudre l'exercice et justifier votre réponse. »</span>
    </div>
    <div class="f41c bx" style="background:transparent;border:1px solid #1d9d80;border-left:4px solid #1d9d80;padding:8px 10px;--bar:#1d9d80">
      <strong style="color:#1d9d80;font-size:12px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 12 11 14 15 10"/></svg> Plus accessible</strong><br>
      <span style="font-size:11.5px">1. Entourer les données utiles.<br>2. Identifier la formule.<br>3. Remplacer les grandeurs avec unités.<br>4. Calculer.<br>5. Écrire une phrase de conclusion.</span>
    </div>
  </div>
  <div class="g2" style="margin-top:8px">
    <div class="f41c bx" style="background:transparent;border:1px solid #b54070;border-left:4px solid #b54070;padding:8px 10px;--bar:#b54070">
      <strong style="color:#b54070;font-size:12px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> Ce n'est pas...</strong><br>
      <span style="font-size:11.5px">Trois cours en parallèle · Baisser l'exigence · Tout numériser · Individualiser chaque activité.</span>
    </div>
    <div class="f41c bx" style="background:transparent;border:1px solid #1d9d80;border-left:4px solid #1d9d80;padding:8px 10px;--bar:#1d9d80">
      <strong style="color:#1d9d80;font-size:12px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 12 11 14 15 10"/></svg> C'est plutôt...</strong><br>
      <span style="font-size:11.5px">Anticiper les obstacles · Consignes lisibles · Varier les accès · Plusieurs moyens de réussir.</span>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
    Ressources
  </h3>
  <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:4px">
    <a href="https://www.versunecoleinclusive.fr/la-cua-une-nouvelle-mode/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      La CUA, une nouvelle mode ? — versunecoleinclusive.fr
    </a>
    <a href="https://pod.phm.education.gouv.fr/video/128826-conception-universelle-des-apprentissages-cua/?is_iframe=true" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Vidéo CUA — pod.phm.education.gouv.fr
    </a>
    <a href="https://podeduc.apps.education.fr/video/67555-et-si-vous-passiez-a-la-conception-universelle-des-apprentissages-pour-gerer-lheterogeneite-des-classes/" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      CUA et hétérogénéité — podeduc.apps.education.fr
    </a>
    <a href="https://www.reseau-canope.fr/actualites/article/faire-classe-a-tous-les-eleves-oui-mais-comment" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f0f4ff;border:1.5px solid #4a80c0;border-radius:20px;font-size:11.5px;color:#2a60a0;text-decoration:none;font-weight:600;white-space:nowrap">
      <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10 13a5 5 0 0 0 7.5.5l3-3a5 5 0 1 0-7-7l-1.7 1.7"/><path d="M14 11a5 5 0 0 0-7.5-.5l-3 3a5 5 0 1 0 7 7l1.7-1.7"/></svg>
      Faire classe à tous les élèves — Réseau Canopé
    </a>
  </div>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Commencez petit : modifier une consigne, ajouter un schéma ou expliciter le vocabulaire constitue déjà une démarche CUA. La CUA n'est pas un label à obtenir, c'est un état d'esprit qui s'installe progressivement. Chaque geste compte, même isolé, et aucun ne sacrifie l'exigence disciplinaire.
  </div>
</div>
`},

'f47':{n:'F47',t:'Identifier les besoins des élèves',s:'Observer autrement pour rendre ses cours plus accessibles',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
    Qu'est-ce qu'un besoin éducatif ?
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Dans une classe, deux élèves peuvent rencontrer la même difficulté… sans avoir les mêmes besoins. L'objectif n'est donc pas uniquement d'identifier ce que l'élève <em>ne sait pas faire</em>, mais de comprendre <strong>ce qui pourrait l'aider à apprendre</strong>. L'idée n'est pas de simplifier les apprentissages, mais de <strong>réduire les obstacles</strong> qui empêchent certains élèves d'entrer dans l'activité.
  </div>
  <div style="margin-top:10px;border-left:3px solid #4e7d8a;padding:6px 12px;font-size:12px;color:#555;font-style:italic">
    Cette fiche propose des <strong style="color:#4e7d8a;font-style:normal">repères de départ</strong>, volontairement accessibles. Elle ne prétend pas épuiser la complexité des besoins éducatifs, un sujet qui fait l'objet de recherches approfondies en sciences de l'éducation. Son objectif est d'aider à <strong style="color:#4e7d8a;font-style:normal">changer de regard</strong> dès les premières semaines, pas de modéliser la diversité des élèves.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    Besoin, difficulté, niveau : ne pas confondre
  </h3>
  <style>
    .f42c{position:relative;overflow:hidden;transition:transform .24s cubic-bezier(.34,1.56,.64,1),box-shadow .22s;cursor:default;border-radius:10px}
    .f42c:hover{transform:translateY(-4px);box-shadow:0 10px 24px rgba(0,0,0,.15)}
    .f42c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
    .f42c:hover::before{opacity:1}
  </style>
  <div class="g2">
    <div class="f42c bx" style="background:transparent;border:1px solid #b54070;border-left:3px solid #b54070;--bar:#b54070">
      <strong style="color:#b54070;display:block;margin-bottom:6px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> Une difficulté</strong>
      <p style="font-size:12px;font-weight:400;margin:0;line-height:1.6">C'est ce que l'enseignant observe : l'élève ne participe pas, ne comprend pas la consigne, décroche rapidement, n'écrit pas, échoue dans l'exercice.</p>
    </div>
    <div class="f42c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80">
      <strong style="color:#1d9d80;display:block;margin-bottom:6px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg> Un besoin</strong>
      <p style="font-size:12px;font-weight:400;margin:0;line-height:1.6">C'est ce qui pourrait aider l'élève à apprendre : davantage de temps, un support visuel, oraliser, manipuler, un cadre rassurant, des étapes plus visibles.</p>
    </div>
    <div class="f42c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0">
      <strong style="color:#4a80c0;display:block;margin-bottom:6px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> Un niveau</strong>
      <p style="font-size:12px;font-weight:400;margin:0;line-height:1.6">Ce n'est pas la même chose qu'un besoin. Un élève à bon niveau peut avoir besoin de plus de temps ou d'oraliser. Un élève en difficulté n'a pas forcément "un faible niveau" : il peut manquer d'outils, de méthode ou de confiance.</p>
    </div>
    <div class="f42c bx" style="background:transparent;border:1px solid #4e7d8a;border-left:3px solid #4e7d8a;--bar:#4e7d8a">
      <strong style="color:#4e7d8a;display:block;margin-bottom:6px"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> Tous les élèves</strong>
      <p style="font-size:12px;font-weight:400;margin:0;line-height:1.6">Les besoins ne concernent pas uniquement les élèves "en difficulté". Tous les élèves ont des besoins, identifier ceux de sa classe, c'est rendre les apprentissages plus accessibles pour tous.</p>
    </div>
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
    Observer autrement
  </h3>
  <table class="tbl">
    <thead><tr><th>Ce que j'observe</th><th>Ce que ça ne veut pas forcément dire</th><th>Besoin possible</th></tr></thead>
    <tbody>
      <tr><td style="font-size:12px">L'élève ne participe pas</td><td style="font-size:12px;color:#b54070">« Il ne veut pas travailler »</td><td style="font-size:12px">Temps de préparation, cadre rassurant</td></tr>
      <tr><td style="font-size:12px">L'élève décroche rapidement</td><td style="font-size:12px;color:#b54070">« Il n'est pas motivé »</td><td style="font-size:12px">Tâches plus courtes, rythme adapté</td></tr>
      <tr><td style="font-size:12px">L'élève ne copie pas</td><td style="font-size:12px;color:#b54070">« Il est paresseux »</td><td style="font-size:12px">Support allégé, aide visuelle</td></tr>
      <tr><td style="font-size:12px">L'élève échoue dans un problème</td><td style="font-size:12px;color:#b54070">« Il n'a pas le niveau »</td><td style="font-size:12px">Étayage, explicitation, exemple</td></tr>
      <tr><td style="font-size:12px">L'élève oublie les consignes</td><td style="font-size:12px;color:#b54070">« Il n'écoute pas »</td><td style="font-size:12px">Consignes visibles et reformulées</td></tr>
      <tr><td style="font-size:12px">L'élève bloque face à l'écrit</td><td style="font-size:12px;color:#b54070">« Il ne comprend rien »</td><td style="font-size:12px">Schéma, oralisation, manipulation</td></tr>
    </tbody>
  </table>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
    Concrètement en classe
  </h3>
  <div class="g2">
    <div class="f42c bx" style="background:transparent;border:1px solid #1d9d80;border-left:3px solid #1d9d80;--bar:#1d9d80"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="3"/><polyline points="9 12 11 14 15 10"/></svg> Consignes et tâches</strong><span style="font-size:12px;display:block;margin-top:3px">Donner des consignes courtes et visibles · fractionner les tâches complexes · expliciter les attentes · donner des exemples concrets avant de laisser travailler.</span></div>
    <div class="f42c bx" style="background:transparent;border:1px solid #4a80c0;border-left:3px solid #4a80c0;--bar:#4a80c0"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg> Supports variés</strong><span style="font-size:12px;display:block;margin-top:3px">Utiliser plusieurs supports (oral, écrit, schéma, manipulation) · autoriser différentes stratégies · prévoir des aides temporaires disponibles à la demande.</span></div>
    <div class="f42c bx" style="background:transparent;border:1px solid #4e7d8a;border-left:3px solid #4e7d8a;--bar:#4e7d8a"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> Suivi et valorisation</strong><span style="font-size:12px;display:block;margin-top:3px">Vérifier la compréhension avant de poursuivre · valoriser les réussites intermédiaires · ne pas attendre l'échec pour ajuster.</span></div>
    <div class="f42c bx" style="background:transparent;border:1px solid #7a5bb5;border-left:3px solid #7a5bb5;--bar:#7a5bb5"><strong><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg> Changer de regard</strong><span style="font-size:12px;display:block;margin-top:3px">Passer d'une logique de jugement à une logique d'analyse : « Qu'est-ce qui, dans la tâche ou le support, peut constituer un obstacle ? »</span></div>
  </div>
</div>

<div class="al rd">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
  <div>
    <strong>Attention aux interprétations rapides</strong><br>
    <span style="font-size:12px">Certaines formulations peuvent enfermer l'élève dans une étiquette : <em>« Il ne veut pas travailler »</em> → peut-être que la tâche est trop complexe. <em>« Il n'écoute pas »</em> → peut-être qu'il a besoin d'un support visuel. <em>« Il n'a pas le niveau »</em> → peut-être qu'il manque d'outils ou de méthode. <em>« Il est lent »</em> → peut-être qu'il a besoin de davantage de temps pour traiter les informations.</span>
  </div>
</div>

<div class="hl" style="margin-top:10px;border-radius:var(--rs)">
  <strong>À retenir</strong><br><br>
  <span style="font-size:12.5px;font-weight:400;line-height:1.8">
    • Une difficulté décrit ce que l'élève ne parvient pas encore à faire.<br>
    • Un besoin correspond à ce qui pourrait l'aider à apprendre.<br>
    • Les besoins ne concernent pas uniquement les élèves en difficulté.<br>
    • Observer les besoins permet de rendre les apprentissages plus accessibles pour tous.<br>
    • Penser les besoins en amont est une démarche centrale de l'école inclusive et de la CUA.
  </span>
</div>

<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    Pour identifier un besoin, observez l'élève <strong>dans l'action</strong> : comment entre-t-il dans la tâche ? À quel moment cherche-t-il de l'aide ? Préfère-t-il écouter, manipuler, écrire ? Ces quelques secondes d'observation ciblée (même informelle, en circulant dans la classe) donnent souvent plus d'information qu'une copie rendue. Un besoin identifié tôt permet un ajustement simple et naturel, sans avoir à tout réorganiser.
  </div>
</div>
`},

'f48':{n:'F48',t:'La grille de compétences (Bac Pro)',s:'5 compétences communes M et PC avec capacités associées',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    Les 5 compétences travaillées en Baccalauréat professionnel
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Une liste non limitative de capacités associées à chacune des compétences indique la façon dont elles peuvent être mises en œuvre. Voir aussi la fiche F50 pour la grille nationale d'évaluation.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    Détail des compétences et capacités associées — Bac Pro
  </h3>
  <table class="tbl"><thead><tr><th style="width:15%">Compétence</th><th>Capacités associées</th></tr></thead>
  <tbody>
  <tr>
    <td><strong style="color:#e8820a">S'approprier</strong></td>
    <td><ul style="margin:0;padding-left:14px;font-size:12px;line-height:1.6">
      <li>Rechercher, extraire et organiser l'information.</li>
      <li>Traduire des informations, des codages.</li>
    </ul></td>
  </tr>
  <tr>
    <td><strong style="color:#b54070">Analyser / Raisonner</strong></td>
    <td><ul style="margin:0;padding-left:14px;font-size:12px;line-height:1.6">
      <li>Émettre des conjectures, formuler des hypothèses.</li>
      <li>Proposer une méthode de résolution.</li>
      <li>Choisir un modèle ou des lois pertinentes.</li>
      <li>Élaborer un algorithme.</li>
      <li>Choisir, élaborer un protocole.</li>
      <li>Évaluer des ordres de grandeur.</li>
    </ul></td>
  </tr>
  <tr>
    <td><strong style="color:#1d9d80">Réaliser</strong></td>
    <td><ul style="margin:0;padding-left:14px;font-size:12px;line-height:1.6">
      <li>Mettre en œuvre les étapes d'une démarche · utiliser un modèle.</li>
      <li>Représenter (tableau, graphique, etc.), changer de registre.</li>
      <li>Calculer (calcul littéral, algébrique, numérique exact ou approché, instrumenté ou à la main).</li>
      <li>Mettre en œuvre un algorithme.</li>
      <li>Expérimenter — en particulier à l'aide d'outils numériques (logiciels ou dispositifs d'acquisition de données).</li>
      <li>Faire une simulation.</li>
      <li>Effectuer des procédures courantes (représentations, collectes de données, utilisation du matériel).</li>
      <li>Mettre en œuvre un protocole expérimental en respectant les règles de sécurité à partir d'un schéma ou d'un descriptif.</li>
      <li>Organiser son poste de travail.</li>
    </ul></td>
  </tr>
  <tr>
    <td><strong style="color:#4a80c0">Valider</strong></td>
    <td><ul style="margin:0;padding-left:14px;font-size:12px;line-height:1.6">
      <li>Exploiter et interpréter des résultats ou des observations de façon critique et argumentée.</li>
      <li>Contrôler la vraisemblance d'une conjecture, de la valeur d'une mesure.</li>
      <li>Valider un modèle ou une hypothèse.</li>
      <li>Mener un raisonnement logique et établir une conclusion.</li>
    </ul></td>
  </tr>
  <tr>
    <td><strong style="color:#7a5bb5">Communiquer</strong></td>
    <td><ul style="margin:0;padding-left:14px;font-size:12px;line-height:1.6">
      <li>À l'écrit comme à l'oral : rendre compte d'un résultat en utilisant un vocabulaire adapté et choisir des modes de représentation appropriés.</li>
      <li>Expliquer une démarche.</li>
    </ul></td>
  </tr>
  </tbody></table>
</div>
`},

'f49':{n:'F49',t:'La grille de compétences (CAP)',s:'5 compétences communes M et PC avec capacités associées',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
    Les 5 compétences travaillées en CAP
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Mêmes compétences que le Bac Pro, mais avec des <strong>capacités adaptées au niveau CAP</strong>. Voir aussi la fiche F51 pour la grille nationale d'évaluation CAP.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    Détail des compétences et capacités associées — CAP
  </h3>
  <table class="tbl"><thead><tr><th style="width:15%">Compétence</th><th>Capacités associées</th></tr></thead>
  <tbody>
  <tr>
    <td><strong style="color:#e8820a">S'approprier</strong></td>
    <td><ul style="margin:0;padding-left:14px;font-size:12px;line-height:1.6">
      <li>Rechercher, extraire et organiser l'information.</li>
      <li>Traduire des informations, des codages.</li>
    </ul></td>
  </tr>
  <tr>
    <td><strong style="color:#b54070">Analyser / Raisonner</strong></td>
    <td><ul style="margin:0;padding-left:14px;font-size:12px;line-height:1.6">
      <li>Émettre des conjectures, formuler des hypothèses.</li>
      <li>Proposer une méthode de résolution, un protocole.</li>
      <li>Élaborer tout ou partie d'un protocole.</li>
      <li>Compléter une méthode de résolution.</li>
      <li>Choisir des lois pertinentes.</li>
      <li>Évaluer des ordres de grandeurs (pour choisir des appareils adaptés).</li>
    </ul></td>
  </tr>
  <tr>
    <td><strong style="color:#1d9d80">Réaliser</strong></td>
    <td><ul style="margin:0;padding-left:14px;font-size:12px;line-height:1.6">
      <li>Mettre en œuvre les étapes d'une démarche.</li>
      <li>Mettre en œuvre un protocole expérimental en respectant les règles de sécurité à partir d'un schéma ou d'un descriptif.</li>
      <li>Organiser son poste de travail.</li>
      <li>Effectuer des procédures courantes (collectes de données, utilisation du matériel).</li>
      <li>Utiliser un modèle · représenter (tableau, graphique) · calculer.</li>
      <li>Mettre en œuvre des algorithmes.</li>
      <li>Expérimenter (en particulier à l'aide d'outils logiciels ou des dispositifs d'acquisition de données).</li>
      <li>Utiliser une simulation.</li>
    </ul></td>
  </tr>
  <tr>
    <td><strong style="color:#4a80c0">Valider</strong></td>
    <td><ul style="margin:0;padding-left:14px;font-size:12px;line-height:1.6">
      <li>Critiquer un résultat (signe, ordre de grandeur, identification des sources d'erreur), argumenter.</li>
      <li>Contrôler la vraisemblance d'une conjecture.</li>
      <li>Valider ou invalider un modèle, une hypothèse.</li>
      <li>Conduire un raisonnement logique et suivre des règles établies pour parvenir à une conclusion.</li>
    </ul></td>
  </tr>
  <tr>
    <td><strong style="color:#7a5bb5">Communiquer</strong></td>
    <td><ul style="margin:0;padding-left:14px;font-size:12px;line-height:1.6">
      <li>À l'écrit comme à l'oral : rendre compte d'un résultat en utilisant un vocabulaire adapté.</li>
      <li>Expliquer une démarche.</li>
    </ul></td>
  </tr>
  </tbody></table>
</div>
`},

'f50':{n:'F50',t:'La grille nationale d\'évaluation (Bac Pro)',s:'Fiche individuelle d\'évaluation — structure et usage',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    Grille nationale d'évaluation — Bac Pro
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Grille nationale d'évaluation en mathématiques et en physique-chimie au Baccalauréat professionnel. Utilisée à la fois pour les évaluations en CCF et pour l'examen ponctuel.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    Structure de la fiche individuelle d'évaluation
  </h3>
  <div class="al gn" style="margin-bottom:10px">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
    <div>En-tête de la grille : <strong>Session · Établissement · Académie · Spécialité · Nom de l'évaluateur · Date · Situation n° · Nom et Prénom du candidat</strong></div>
  </div>
  <table class="tbl"><thead><tr><th style="width:18%">Compétence</th><th>Capacités évaluées</th><th style="width:18%">Questions</th><th style="width:18%">Appréciation du niveau</th></tr></thead>
  <tbody>
  <tr>
    <td><strong style="color:#e8820a">S'approprier</strong></td>
    <td><ul style="margin:0;padding-left:12px;font-size:12px;line-height:1.6">
      <li>Rechercher, extraire et organiser l'information.</li>
      <li>Traduire des informations, des codages.</li>
    </ul></td>
    <td style="background:#f9f9f9;font-size:11px;color:#888;font-style:italic">À compléter par l'enseignant</td>
    <td style="background:#f9f9f9;font-size:11px;color:#888;font-style:italic">1 · 2 · 3 · 4</td>
  </tr>
  <tr>
    <td><strong style="color:#b54070">Analyser / Raisonner</strong></td>
    <td><ul style="margin:0;padding-left:12px;font-size:12px;line-height:1.6">
      <li>Émettre des conjectures, formuler des hypothèses.</li>
      <li>Proposer, choisir une méthode de résolution ou un protocole expérimental.</li>
    </ul></td>
    <td style="background:#f9f9f9"></td><td style="background:#f9f9f9"></td>
  </tr>
  <tr>
    <td><strong style="color:#1d9d80">Réaliser</strong></td>
    <td><ul style="margin:0;padding-left:12px;font-size:12px;line-height:1.6">
      <li>Mettre en œuvre une méthode de résolution, des algorithmes ou un protocole expérimental en respectant les règles de sécurité.</li>
      <li>Utiliser un modèle, représenter, calculer.</li>
      <li>Expérimenter, faire une simulation.</li>
    </ul></td>
    <td style="background:#f9f9f9"></td><td style="background:#f9f9f9"></td>
  </tr>
  <tr>
    <td><strong style="color:#4a80c0">Valider</strong></td>
    <td><ul style="margin:0;padding-left:12px;font-size:12px;line-height:1.6">
      <li>Commenter un résultat de façon critique et argumentée.</li>
      <li>Contrôler la vraisemblance d'une conjecture, de la valeur d'une mesure.</li>
      <li>Valider une hypothèse.</li>
      <li>Mener un raisonnement logique et établir une conclusion.</li>
    </ul></td>
    <td style="background:#f9f9f9"></td><td style="background:#f9f9f9"></td>
  </tr>
  <tr>
    <td><strong style="color:#7a5bb5">Communiquer</strong></td>
    <td><ul style="margin:0;padding-left:12px;font-size:12px;line-height:1.6">
      <li>Rendre compte d'un résultat, à l'oral ou à l'écrit en utilisant des outils et un langage approprié.</li>
      <li>Expliquer une démarche.</li>
    </ul></td>
    <td style="background:#f9f9f9"></td><td style="background:#f9f9f9"></td>
  </tr>
  </tbody></table>
  <div class="al gn" style="margin-top:10px">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
    <div>Colonnes <em>Capacités</em> et <em>Connaissances</em> à compléter par l'enseignant selon les questions posées dans la situation d'évaluation.</div>
  </div>
</div>
`},

'f51':{n:'F51',t:'La grille nationale d\'évaluation (CAP)',s:'Fiche individuelle d\'évaluation — structure et usage',b:`
<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"/><path d="M14 2v6h6"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    Grille nationale d'évaluation — CAP
  </h3>
  <div class="hl" style="border-radius:var(--rs)">
    Grille nationale d'évaluation en mathématiques et en physique-chimie au Certificat d'Aptitude Professionnelle. Utilisée à la fois pour les évaluations en CCF et pour l'examen ponctuel.
  </div>
</div>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>
    Structure de la fiche individuelle d'évaluation
  </h3>
  <div class="al gn" style="margin-bottom:10px">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
    <div>En-tête de la grille : <strong>Session · Établissement · Académie · Spécialité · Nom de l'évaluateur · Date · Situation n° · Nom et Prénom du candidat</strong></div>
  </div>
  <table class="tbl"><thead><tr><th style="width:18%">Compétence</th><th>Capacités évaluées</th><th style="width:18%">Questions</th><th style="width:18%">Appréciation du niveau</th></tr></thead>
  <tbody>
  <tr>
    <td><strong style="color:#e8820a">S'approprier</strong></td>
    <td><ul style="margin:0;padding-left:12px;font-size:12px;line-height:1.6">
      <li>Rechercher, extraire et organiser l'information.</li>
      <li>Traduire des informations, des codages.</li>
    </ul></td>
    <td style="background:#f9f9f9;font-size:11px;color:#888;font-style:italic">À compléter par l'enseignant</td>
    <td style="background:#f9f9f9;font-size:11px;color:#888;font-style:italic">1 · 2 · 3 · 4</td>
  </tr>
  <tr>
    <td><strong style="color:#b54070">Analyser / Raisonner</strong></td>
    <td><ul style="margin:0;padding-left:12px;font-size:12px;line-height:1.6">
      <li>Émettre des conjectures, formuler des hypothèses.</li>
      <li>Proposer, choisir une méthode de résolution ou un protocole expérimental.</li>
    </ul></td>
    <td style="background:#f9f9f9"></td><td style="background:#f9f9f9"></td>
  </tr>
  <tr>
    <td><strong style="color:#1d9d80">Réaliser</strong></td>
    <td><ul style="margin:0;padding-left:12px;font-size:12px;line-height:1.6">
      <li>Mettre en œuvre une méthode de résolution, des algorithmes ou un protocole expérimental en respectant les règles de sécurité.</li>
      <li>Utiliser un modèle, représenter, calculer.</li>
      <li>Expérimenter, faire une simulation.</li>
    </ul></td>
    <td style="background:#f9f9f9"></td><td style="background:#f9f9f9"></td>
  </tr>
  <tr>
    <td><strong style="color:#4a80c0">Valider</strong></td>
    <td><ul style="margin:0;padding-left:12px;font-size:12px;line-height:1.6">
      <li>Commenter un résultat de façon critique et argumentée.</li>
      <li>Contrôler la vraisemblance d'une conjecture, de la valeur d'une mesure.</li>
      <li>Valider une hypothèse.</li>
      <li>Mener un raisonnement logique et établir une conclusion.</li>
    </ul></td>
    <td style="background:#f9f9f9"></td><td style="background:#f9f9f9"></td>
  </tr>
  <tr>
    <td><strong style="color:#7a5bb5">Communiquer</strong></td>
    <td><ul style="margin:0;padding-left:12px;font-size:12px;line-height:1.6">
      <li>Rendre compte d'un résultat, à l'oral ou à l'écrit en utilisant des outils et un langage approprié.</li>
      <li>Expliquer une démarche.</li>
    </ul></td>
    <td style="background:#f9f9f9"></td><td style="background:#f9f9f9"></td>
  </tr>
  </tbody></table>
  <div class="al gn" style="margin-top:10px">
    <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
    <div>Colonnes <em>Capacités</em> et <em>Connaissances</em> à compléter par l'enseignant selon les questions posées dans la situation d'évaluation.</div>
  </div>
</div>
`},

'f52':{n:'F52',t:'Glossaire : sigles et termes du kit',s:'Repère alphabétique des abréviations rencontrées',b:`
<style>
  .f49c{position:relative;overflow:hidden;transition:transform .2s cubic-bezier(.34,1.56,.64,1),box-shadow .2s;cursor:default;border-radius:8px;padding:8px 10px}
  .f49c:hover{transform:translateX(4px);box-shadow:0 4px 12px rgba(0,0,0,.08)}
  .f49c::before{content:'';position:absolute;left:0;top:0;bottom:0;width:3px;background:var(--bar,#b54070);opacity:0;transition:opacity .2s}
  .f49c:hover::before{opacity:1}
  .f49-nav{display:flex;flex-wrap:wrap;gap:6px;margin:8px 0 16px;padding:10px;background:#f7f3f5;border-radius:8px;justify-content:center}
  .f49-nav a{display:inline-block;min-width:26px;text-align:center;padding:4px 8px;background:#fff;color:#7a1f45;text-decoration:none;border:1px solid #e0c8d4;border-radius:5px;font-weight:700;font-size:13px;transition:all .15s}
  .f49-nav a:hover{background:#b54070;color:#fff;border-color:#b54070}
  .f49-letter{display:inline-block;background:#b54070;color:#fff;font-weight:800;font-size:14px;padding:4px 12px;border-radius:5px;margin:14px 0 8px;letter-spacing:1px}
  .f49-list{display:flex;flex-direction:column;gap:6px}
  .f49-list .f49c strong{color:#7a1f45;display:inline-block;min-width:130px;margin-right:8px}
  .f49-link{color:#b54070;font-size:11px;text-decoration:none;font-weight:700;margin-left:6px;padding:1px 6px;background:#fde0eb;border-radius:99px;display:inline-block}
  .f49-link:hover{background:#b54070;color:#fff}
</style>

<div class="s">
  <h3>
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;margin-right:6px"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
    Repérer rapidement un sigle ou un terme
  </h3>
  <p>L'Éducation nationale utilise un vocabulaire dense — sigles, termes techniques, dispositifs aux noms abrégés. Ce glossaire rassemble les sigles et termes rencontrés dans le kit, par ordre alphabétique. <strong>Cliquez sur une lettre</strong> pour naviguer rapidement, ou utilisez la recherche du kit (touche <kbd>Ctrl</kbd> + <kbd>K</kbd>) pour chercher un terme précis.</p>
</div>
<div class="f49-nav"><a href="#f49-#" onclick="document.getElementById('f49-#').scrollIntoView({behavior:'smooth',block:'start'});return false">#</a><a href="#f49-A" onclick="document.getElementById('f49-A').scrollIntoView({behavior:'smooth',block:'start'});return false">A</a><a href="#f49-B" onclick="document.getElementById('f49-B').scrollIntoView({behavior:'smooth',block:'start'});return false">B</a><a href="#f49-C" onclick="document.getElementById('f49-C').scrollIntoView({behavior:'smooth',block:'start'});return false">C</a><a href="#f49-D" onclick="document.getElementById('f49-D').scrollIntoView({behavior:'smooth',block:'start'});return false">D</a><a href="#f49-E" onclick="document.getElementById('f49-E').scrollIntoView({behavior:'smooth',block:'start'});return false">E</a><a href="#f49-F" onclick="document.getElementById('f49-F').scrollIntoView({behavior:'smooth',block:'start'});return false">F</a><a href="#f49-G" onclick="document.getElementById('f49-G').scrollIntoView({behavior:'smooth',block:'start'});return false">G</a><a href="#f49-I" onclick="document.getElementById('f49-I').scrollIntoView({behavior:'smooth',block:'start'});return false">I</a><a href="#f49-J" onclick="document.getElementById('f49-J').scrollIntoView({behavior:'smooth',block:'start'});return false">J</a><a href="#f49-L" onclick="document.getElementById('f49-L').scrollIntoView({behavior:'smooth',block:'start'});return false">L</a><a href="#f49-M" onclick="document.getElementById('f49-M').scrollIntoView({behavior:'smooth',block:'start'});return false">M</a><a href="#f49-P" onclick="document.getElementById('f49-P').scrollIntoView({behavior:'smooth',block:'start'});return false">P</a><a href="#f49-Q" onclick="document.getElementById('f49-Q').scrollIntoView({behavior:'smooth',block:'start'});return false">Q</a><a href="#f49-R" onclick="document.getElementById('f49-R').scrollIntoView({behavior:'smooth',block:'start'});return false">R</a><a href="#f49-S" onclick="document.getElementById('f49-S').scrollIntoView({behavior:'smooth',block:'start'});return false">S</a><a href="#f49-T" onclick="document.getElementById('f49-T').scrollIntoView({behavior:'smooth',block:'start'});return false">T</a><a href="#f49-U" onclick="document.getElementById('f49-U').scrollIntoView({behavior:'smooth',block:'start'});return false">U</a></div><div id="f49-#" class="s"><div class="f49-letter">#</div><div class="f49-list"><div class="f49c" style="--bar:#b54070"><strong>3PM</strong>3ᵉ Prépa-métiers <a href="#" class="f49-link" onclick="event.preventDefault();openModal('f15')" title="Ouvrir la fiche">→ F15</a></div></div></div>
<div id="f49-A" class="s"><div class="f49-letter">A</div><div class="f49-list"><div class="f49c" style="--bar:#4a80c0"><strong>AED</strong>Assistant d'éducation</div><div class="f49c" style="--bar:#4a80c0"><strong>AESH</strong>Accompagnant des élèves en situation de handicap</div><div class="f49c" style="--bar:#4a80c0"><strong>AP</strong>Accompagnement personnalisé</div><div class="f49c" style="--bar:#4a80c0"><strong>AR</strong>Accompagnement renforcé</div></div></div>
<div id="f49-B" class="s"><div class="f49-letter">B</div><div class="f49-list"><div class="f49c" style="--bar:#1d9d80"><strong>BFC</strong>Bilan de fin de cycle</div><div class="f49c" style="--bar:#1d9d80"><strong>BMA</strong>Brevet des métiers d'art</div><div class="f49c" style="--bar:#1d9d80"><strong>BNMA</strong>Brevet national des métiers d'art</div><div class="f49c" style="--bar:#1d9d80"><strong>BO / BOEN</strong>Bulletin officiel (de l'Éducation nationale)</div><div class="f49c" style="--bar:#1d9d80"><strong>BP</strong>Brevet professionnel</div><div class="f49c" style="--bar:#1d9d80"><strong>BTS</strong>Brevet de technicien supérieur</div><div class="f49c" style="--bar:#1d9d80"><strong>BUT</strong>Bachelor universitaire de technologie</div></div></div>
<div id="f49-C" class="s"><div class="f49-letter">C</div><div class="f49-list"><div class="f49c" style="--bar:#7a5bb5"><strong>CA</strong>Conseil d'administration</div><div class="f49c" style="--bar:#7a5bb5"><strong>CAP</strong>Certificat d'aptitude professionnelle</div><div class="f49c" style="--bar:#7a5bb5"><strong>CAPLP</strong>Certificat d'Aptitude au Professorat de Lycée Professionnel <a href="#" class="f49-link" onclick="event.preventDefault();openModal('f7')" title="Ouvrir la fiche">→ F7</a></div><div class="f49c" style="--bar:#7a5bb5"><strong>CCF</strong>Contrôle en cours de formation <a href="#" class="f49-link" onclick="event.preventDefault();openModal('f45')" title="Ouvrir la fiche">→ F45</a></div><div class="f49c" style="--bar:#7a5bb5"><strong>CDD</strong>Contrat à durée déterminée</div><div class="f49c" style="--bar:#7a5bb5"><strong>CDI</strong>Contrat à durée indéterminée — à distinguer du CDI « Centre de Documentation et d'Information » <a href="#" class="f49-link" onclick="event.preventDefault();openModal('f8')" title="Ouvrir la fiche">→ F8</a></div><div class="f49c" style="--bar:#7a5bb5"><strong>CDIsation</strong>Transformation d'un contrat CDD en CDI après 6 années de services continus <a href="#" class="f49-link" onclick="event.preventDefault();openModal('f8')" title="Ouvrir la fiche">→ F8</a></div><div class="f49c" style="--bar:#7a5bb5"><strong>CDT</strong>Cahier de textes (numérique)</div><div class="f49c" style="--bar:#7a5bb5"><strong>CGFP</strong>Code général de la fonction publique</div><div class="f49c" style="--bar:#7a5bb5"><strong>Co-intervention</strong>Dispositif où deux enseignants animent simultanément une séance (ex. maths et enseignement professionnel) <a href="#" class="f49-link" onclick="event.preventDefault();openModal('f22')" title="Ouvrir la fiche">→ F22</a></div><div class="f49c" style="--bar:#7a5bb5"><strong>Co-validation</strong>Validation conjointe d'une compétence par plusieurs enseignants ou par l'enseignant et l'élève</div><div class="f49c" style="--bar:#7a5bb5"><strong>CPE</strong>Conseiller principal d'éducation</div><div class="f49c" style="--bar:#7a5bb5"><strong>CPS</strong>Compétences psychosociales</div><div class="f49c" style="--bar:#7a5bb5"><strong>CS</strong>Certificat de spécialisation</div><div class="f49c" style="--bar:#7a5bb5"><strong>CTEN</strong>Contractuel enseignant</div><div class="f49c" style="--bar:#7a5bb5"><strong>CUA</strong>Conception universelle des apprentissages <a href="#" class="f49-link" onclick="event.preventDefault();openModal('f46')" title="Ouvrir la fiche">→ F46</a></div></div></div>
<div id="f49-D" class="s"><div class="f49-letter">D</div><div class="f49-list"><div class="f49c" style="--bar:#e8820a"><strong>DAAEC</strong>Dispositif d'accompagnement et d'aide à l'évolution professionnelle de l'agent contractuel (3 mois)</div><div class="f49c" style="--bar:#e8820a"><strong>DDFPT</strong>Directeur délégué aux formations professionnelles et technologiques</div><div class="f49c" style="--bar:#e8820a"><strong>DECF</strong>Diplôme d'études comptables et financières</div><div class="f49c" style="--bar:#e8820a"><strong>DNB</strong>Diplôme national du brevet <a href="#" class="f49-link" onclick="event.preventDefault();openModal('f16')" title="Ouvrir la fiche">→ F16</a></div><div class="f49c" style="--bar:#e8820a"><strong>DN MADE</strong>Diplôme national des métiers d'art et du design</div><div class="f49c" style="--bar:#e8820a"><strong>DPE</strong>Division des personnels enseignants (au rectorat)</div><div class="f49c" style="--bar:#e8820a"><strong>DUERP</strong>Document unique d'évaluation des risques professionnels</div></div></div>
<div id="f49-E" class="s"><div class="f49-letter">E</div><div class="f49-list"><div class="f49c" style="--bar:#4e7d8a"><strong>EAFC</strong>École académique de la formation continue</div><div class="f49c" style="--bar:#4e7d8a"><strong>EG</strong>Enseignements généraux</div><div class="f49c" style="--bar:#4e7d8a"><strong>EMC</strong>Enseignement moral et civique</div><div class="f49c" style="--bar:#4e7d8a"><strong>EN</strong>Éducation nationale</div><div class="f49c" style="--bar:#4e7d8a"><strong>ENT</strong>Espace numérique de travail</div><div class="f49c" style="--bar:#4e7d8a"><strong>EP</strong>Enseignement professionnel</div><div class="f49c" style="--bar:#4e7d8a"><strong>EPI</strong>Équipement de protection individuelle (sécurité au laboratoire)</div><div class="f49c" style="--bar:#4e7d8a"><strong>ESS</strong>Équipe de suivi de la scolarisation (élèves en situation de handicap)</div><div class="f49c" style="--bar:#4e7d8a"><strong>ExAO</strong>Expérimentation assistée par ordinateur</div><div class="f49c" style="--bar:#4e7d8a"><strong>Exercice-liste</strong>Exercice composé d'une série de petites questions courtes indépendantes, type automatismes — courant en DNB pro et en CCF</div></div></div>
<div id="f49-F" class="s"><div class="f49-letter">F</div><div class="f49-list"><div class="f49c" style="--bar:#b54070"><strong>FCIL</strong>Formation complémentaire d'initiative locale</div><div class="f49c" style="--bar:#b54070"><strong>FDS</strong>Fiche de données de sécurité (produits chimiques)</div></div></div>
<div id="f49-G" class="s"><div class="f49-letter">G</div><div class="f49-list"><div class="f49c" style="--bar:#4a80c0"><strong>GMPCIE</strong>Groupe Mathématiques Physique-Chimie pour l'Innovation Éducative</div><div class="f49c" style="--bar:#4a80c0"><strong>GRIESP</strong>Groupe de Recherche et d'Innovation pour l'Enseignement des Sciences Physiques</div></div></div>
<div id="f49-I" class="s"><div class="f49-letter">I</div><div class="f49-list"><div class="f49c" style="--bar:#1d9d80"><strong>IEN</strong>Inspecteur de l'Éducation nationale</div></div></div>
<div id="f49-J" class="s"><div class="f49-letter">J</div><div class="f49-list"><div class="f49c" style="--bar:#7a5bb5"><strong>JO</strong>Journal officiel (de la République française)</div></div></div>
<div id="f49-L" class="s"><div class="f49-letter">L</div><div class="f49-list"><div class="f49c" style="--bar:#e8820a"><strong>LP</strong>Lycée professionnel</div><div class="f49c" style="--bar:#e8820a"><strong>LSL</strong>Livret scolaire du lycée</div><div class="f49c" style="--bar:#e8820a"><strong>LSU</strong>Livret scolaire unique (collège, dont 3PM)</div></div></div>
<div id="f49-M" class="s"><div class="f49-letter">M</div><div class="f49-list"><div class="f49c" style="--bar:#4e7d8a"><strong>MDPH</strong>Maison départementale des personnes handicapées</div><div class="f49c" style="--bar:#4e7d8a"><strong>MPC</strong>Mathématiques et Physique-Chimie</div></div></div>
<div id="f49-P" class="s"><div class="f49-letter">P</div><div class="f49-list"><div class="f49c" style="--bar:#b54070"><strong>PAF</strong>Plan académique de formation</div><div class="f49c" style="--bar:#b54070"><strong>PAI</strong>Projet d'accueil individualisé (santé) <a href="#" class="f49-link" onclick="event.preventDefault();openModal('f45')" title="Ouvrir la fiche">→ F45</a></div><div class="f49c" style="--bar:#b54070"><strong>PAP</strong>Plan d'accompagnement personnalisé (troubles des apprentissages) <a href="#" class="f49-link" onclick="event.preventDefault();openModal('f45')" title="Ouvrir la fiche">→ F45</a></div><div class="f49c" style="--bar:#b54070"><strong>Part individuelle tracée</strong>Production propre à un élève, identifiable et conservée comme trace de son travail personnel — utile pour le CCF et l'évaluation par compétences</div><div class="f49c" style="--bar:#b54070"><strong>PAS</strong>Pôles d'Appui à la Scolarité</div><div class="f49c" style="--bar:#b54070"><strong>PC</strong>Physique-chimie</div><div class="f49c" style="--bar:#b54070"><strong>PDF</strong>Portable Document Format (format de fichier)</div><div class="f49c" style="--bar:#b54070"><strong>PIAL</strong>Pôles Inclusifs d'Accompagnement Localisés — dispositif progressivement remplacé par les PAS</div><div class="f49c" style="--bar:#b54070"><strong>Pix</strong>Plateforme et certification nationale des compétences numériques</div><div class="f49c" style="--bar:#b54070"><strong>PP</strong>Professeur principal</div><div class="f49c" style="--bar:#b54070"><strong>PPCR</strong>Parcours professionnels, carrières et rémunérations — concerne les titulaires (≠ contractuels) <a href="#" class="f49-link" onclick="event.preventDefault();openModal('f6')" title="Ouvrir la fiche">→ F6</a></div><div class="f49c" style="--bar:#b54070"><strong>PPRE</strong>Programme personnalisé de réussite éducative <a href="#" class="f49-link" onclick="event.preventDefault();openModal('f45')" title="Ouvrir la fiche">→ F45</a></div><div class="f49c" style="--bar:#b54070"><strong>PPS</strong>Projet personnalisé de scolarisation (handicap) <a href="#" class="f49-link" onclick="event.preventDefault();openModal('f45')" title="Ouvrir la fiche">→ F45</a></div><div class="f49c" style="--bar:#b54070"><strong>PV</strong>Procès-verbal (ex. PV de conseil de classe)</div></div></div>
<div id="f49-Q" class="s"><div class="f49-letter">Q</div><div class="f49-list"><div class="f49c" style="--bar:#4a80c0"><strong>QCM</strong>Questionnaire à choix multiples</div></div></div>
<div id="f49-R" class="s"><div class="f49-letter">R</div><div class="f49-list"><div class="f49c" style="--bar:#1d9d80"><strong>RAEP</strong>Reconnaissance des acquis de l'expérience professionnelle — dossier du concours interne <a href="#" class="f49-link" onclick="event.preventDefault();openModal('f7')" title="Ouvrir la fiche">→ F7</a></div><div class="f49c" style="--bar:#1d9d80"><strong>RBDE</strong>Référent du Bureau des Entreprises</div></div></div>
<div id="f49-S" class="s"><div class="f49-letter">S</div><div class="f49-list"><div class="f49c" style="--bar:#7a5bb5"><strong>SEGPA</strong>Section d'enseignement général et professionnel adapté</div><div class="f49c" style="--bar:#7a5bb5"><strong>SIAL</strong>Système d'information et d'aide pour les lauréats</div><div class="f49c" style="--bar:#7a5bb5"><strong>SVT</strong>Sciences de la vie et de la Terre</div></div></div>
<div id="f49-T" class="s"><div class="f49-letter">T</div><div class="f49-list"><div class="f49c" style="--bar:#e8820a"><strong>TCAP</strong>Terminale CAP</div><div class="f49c" style="--bar:#e8820a"><strong>TDAH</strong>Trouble du déficit de l'attention avec ou sans hyperactivité</div><div class="f49c" style="--bar:#e8820a"><strong>TP</strong>Travaux pratiques</div></div></div>
<div id="f49-U" class="s"><div class="f49-letter">U</div><div class="f49-list"><div class="f49c" style="--bar:#4e7d8a"><strong>ULIS</strong>Unité localisée pour l'inclusion scolaire</div></div></div>
<div class="al gn">
  <div class="ai"><svg class="ai" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a6 6 0 0 1 4.5 10c-.7.8-1.5 1.5-1.5 2.5H9c0-1-.8-1.7-1.5-2.5A6 6 0 0 1 12 2z"/><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="21" x2="14" y2="21"/></svg></div>
  <div>
    <strong>Conseil terrain</strong><br>
    En conseil de classe, en réunion d'équipe ou dans un document officiel, n'hésitez pas à <strong>demander la signification d'un sigle inconnu</strong> — vous ne serez pas la seule personne à ne pas le connaître. Les sigles évoluent (les dispositifs changent de nom tous les 3-4 ans en moyenne), et même les collègues titulaires n'ont pas toujours les références à jour. <strong>Ce glossaire est vivant</strong> : si vous rencontrez un terme manquant, signalez-le à votre IEN pour qu'il puisse être ajouté à la prochaine mise à jour du kit.
  </div>
</div>
`}
};