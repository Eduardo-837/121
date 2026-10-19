import os from 'node:os';
import {syncBuiltinESMExports} from 'node:module';
const original=os.userInfo;
os.userInfo=(options)=>{try{return original(options)}catch(e){if(e.code!=='ERR_SYSTEM_ERROR')throw e;return {uid:-1,gid:-1,username:process.env.USERNAME||'Codex',homedir:process.env.USERPROFILE||process.cwd(),shell:null}}};
syncBuiltinESMExports();
