import  express  from "express";
import { addUser, deleteUser, editUser, getUser, getUserdata } from "../controller/function.js";


const router = express.Router();

router.post("/add",addUser);
router.get("/all",getUserdata);
router.get("/:id",getUser);
router.put("/:id",editUser);
router.delete("/:id",deleteUser);
    
    


export default router;