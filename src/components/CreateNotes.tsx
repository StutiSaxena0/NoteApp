import React from 'react';
import { Form } from 'react-bootstrap';
import { Note } from '../models/note.model'
import Button from 'react-bootstrap/Button'


interface ICreateNoteProps {
  notes: Note[]
  setNotes:React.Dispatch<React.SetStateAction<Note[]>>
 
}

const CreateNotes: React.FunctionComponent<ICreateNoteProps> = ({notes,setNotes}) => {
const [error,setError]= React.useState<string>("")
  const titleRef =React.useRef<HTMLInputElement | null>(null)
const textRef =React.useRef<HTMLTextAreaElement|null>(null)
const colorRef =React.useRef<HTMLInputElement | null>(null)
const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void=>{
  e.preventDefault()
  if(titleRef.current?.value ===""||textRef.current?.value ===""){
    return setError("All Fields are mandotry");
  }
  setError ("");
  setNotes([...notes,
  {
    id:(new Date()).toString(),
    title:(titleRef.current as HTMLInputElement).value,
    text: (textRef.current as HTMLTextAreaElement ).value,
    color:(colorRef.current as HTMLInputElement).value,
    date:(new Date()).toString()

  }
  
  ])
  

} 

return (
    <>
    <h2>Create Notes</h2>
     <Form className="mt-3 mb-3" onSubmit={(e)=>handleSubmit(e)}>
       <Form.Group className="mb-3" controlId="formBasicTitle">
         <Form.Label> Title  </Form.Label>
         <Form.Control type="text" placeholder="Entet Title for the Note" ref={titleRef}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicText">
         <Form.Label> Text  </Form.Label>
         <Form.Control placeholder="Entet Your notes" as="textarea" rows={3} ref={ textRef}/>
       </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicTitle">
         <Form.Label htmlFor="colorInput"> Notes Color  </Form.Label>
         <Form.Control type="color" id="colorInput"  defaultValue="#dfdfdf" title="choose your color" ref={colorRef}/>

       </Form.Group>
       <Button type="submit" variant="primary">Submit</Button>
     </Form>

    </>
  )

}
export default  CreateNotes;
