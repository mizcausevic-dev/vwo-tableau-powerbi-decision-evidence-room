const fs = require('fs');
const path = require('path');

const evidencePath = path.join(__dirname, '..', 'data', 'signals.json');
const pagePath = path.join(__dirname, '..', 'docs', 'index.html');
const evidence = JSON.parse(fs.readFileSync(evidencePath, 'utf8'));
const page = fs.readFileSync(pagePath, 'utf8');

const requiredPlatforms = ["VWO","Tableau","Power BI"];
const requiredSignals = ["experiment integrity","holdout trust","dashboard lineage"];

for (const platform of requiredPlatforms) {
  if (!evidence.platforms.includes(platform) || !page.includes(platform)) {
    throw new Error('Missing platform signal: ' + platform);
  }
}

for (const signal of requiredSignals) {
  if (!evidence.signals.some((entry) => entry.lane === signal) || !page.includes(signal)) {
    throw new Error('Missing evidence lane: ' + signal);
  }
}

for (const required of ['Decision evidence', 'Related surfaces', 'data-filter', 'Footer links', 'Where are we exposed']) {
  if (!page.includes(required)) {
    throw new Error('Missing page capability: ' + required);
  }
}

console.log('vwo-tableau-powerbi-decision-evidence-room: validation passed');
