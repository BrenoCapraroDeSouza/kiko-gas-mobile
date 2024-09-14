# Kiko Gás Mobile 📱

Aplicativo oficial dos serviços Kiko Gás voltado aos clientes dos revendedores.

### Instalação das dependências

Na raiz do projeto execute o seguinte comando:

```sh
npm install # ou npm i
```

Esse comando irá instalar as dependências necessárias para que o projeto possa ser executado com sucesso.

### Como executar?

Ainda na raiz do projeto execute o seguinte comando:

```sh
npm run start
```

Será carregado no terminal um **QRCode** para você escanear com a câmera do seu celular. Ao escaneá-lo, o aplicativo irá abrir em seu celular.

**Observação**: Para que o aplicativo seja aberto no seu celular, você deve ter o **Expo** instalado. Você pode obter o aplicativo do Expo pela **Play Store** (usuários Android) ou na **App Store** (usuários iPhone).

#### Sobre os comandos `ios` e `android`

Você pode utilizá-los em situações que você deseja emular o aplicativo em seu computador.

- `npm run ios`: Irá emular o aplicativo em um dispositivo iPhone. É **obrigatório** possuir a IDE **XCode da Apple** para que isso seja possível. **Diponível somente para usuários com o sistema operacional MacOS**.
- `npm run android`: Ele irá abrir um emulador contendo um dispositivo Android para executar o aplicativo. Isso só será possível se você tiver o **Android Studio** instalado em seu computador e devidamente configurado.
