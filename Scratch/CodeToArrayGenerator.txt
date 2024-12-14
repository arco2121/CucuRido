const fs = require('fs');

// Funzione principale
async function processFile(inputFile, outputFile) {
  try {
    // Leggi il contenuto del file di input
    const data = fs.readFileSync(inputFile, 'utf8');

    // Dividi il testo in righe e processale
    const QuestionsArr = data.split('\n').filter(line => line.trim() !== '').map(line => {
      const underscoreCount = (line.match(/_/g) || []).length; // Conta i caratteri '_'
      return [line, underscoreCount];
    });

    // Scrivi il risultato in un file di output
    fs.writeFileSync(outputFile, JSON.stringify(QuestionsArr, null, 2), 'utf8');
    console.log(`Risultato salvato in: ${outputFile}`);
  } catch (error) {
    console.error("Errore durante l'elaborazione del file:", error);
  }
}

// Specifica il file di input e output
const inputFile = './input.txt';
const outputFile = './output.json';

// Esegui la funzione
processFile(inputFile, outputFile);
