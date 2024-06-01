/// <reference types="vite/client" />
//

interface ImportMetaEnv {
  SENDGRID_API_KEY: string
}

interface ImportMeta {
  env: ImportMetaEnv
}
