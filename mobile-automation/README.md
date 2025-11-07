# Mobile Automation - WebdriverIO + Appium

Requisitos
Node 18+, npm, Appium instalado globalmente ou via serviço

Instalação
npm ci

Executando local (emulador Android ou iOS)
Coloque o app em apps/native-demo-app.apk ou defina ANDROID_APP_PATH/I
OS_APP_PATH
npm run test:android
npm run test:ios

Relatórios Allure
npm run report:allure

Integração BrowserStack
Defina variáveis de ambiente BROWSERSTACK_USER e BROWSERSTACK_KEY
Adapte wdio.conf.js com capabilities de BrowserStack e execute via pipeline

CI
Arquivo de pipeline: .gitlab-ci.yml

Estrutura
src/pageobjects contém os page objects
test/specs contém os testes
data contém arquivos de dados para testes

Observações
Ajuste os selectors de acordo com o identificador real do app se necessário
