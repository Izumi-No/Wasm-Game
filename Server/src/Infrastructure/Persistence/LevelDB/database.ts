import {Level} from "level" 
import path from "path"

export const LevelDatabase = new Level( path.resolve(process.cwd(), "database/db"),{ valueEncoding: 'json' })

