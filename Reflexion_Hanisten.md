Ich habe eine vorhandene Shopping-List-App in mein eigenes Repository kopiert und dort eine CI/CD-Pipeline mit GitHub Actions eingerichtet. Mein Ziel war es, Linting, Tests und ein einfaches Deployment in separate Jobs zu unterteilen.

Ich habe das Workflow-File eingerichtet und es in die Schritte lint → test → deploy gegliedert. Dabei kam Node 20 mit npm-Cache zum Einsatz.

Zusätzlich habe ich Jest mit einem kleinen Beispieltest integriert und ESLint aktiviert. Es war mir wichtig, dass die Pipeline sofort stoppt, wenn ein Fehler auftritt.

Zu Beginn gab es einen Fehler, weil keine Tests gefunden wurden und Next fehlte. Ich habe das Problem mit npm ci, einem Beispieltest und den richtigen Importen behoben.

Die Reihenfolge macht Sinn: Zuerst die Qualität prüfen, dann die Tests und schließlich das Deployment. So wird nur geprüfter Code weiterverarbeitet.y

In Zukunft würde ich gerne einen Build-Job hinzufügen, mehr Tests schreiben und Pre-commit Hooks nutzen. Insgesamt ist die Pipeline klar strukturiert, wartbar und erfüllt genau ihren Zweck.