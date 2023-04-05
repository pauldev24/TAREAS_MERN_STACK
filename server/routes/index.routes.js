import {Router} from 'express'
import {con} from '../db.js'

const router = Router();

//Para probar la conexion
router.get('/ping',async (req, res) => {
    const [rows] = await con.query('SELECT 1 + 1 as result');
    console.log(rows[0]);
    res.json(rows[0]);
})

export default router;