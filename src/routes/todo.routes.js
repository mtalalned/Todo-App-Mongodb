import express from "express"
import { addTodo, deleteTodo, editTodo, getAllTodo, getSingleTodo } from "../controllers/todo.controllers.js"


const router = express.Router()

router.get ('/todo' , getAllTodo)
router.get ('/todo/:id' , getSingleTodo)
router.post ('/todo' , addTodo)
router.delete ('/todo' , deleteTodo)
router.put ('/todo' , editTodo)

export default router