import React ,{useState}from 'react';
import {Note} from './models/note.model'
import  NoteList from './components/NotesList'
import Header from './components/Header'
import CreateNotes from './components/CreateNotes';
import { Col, Row, Container} from 'react-bootstrap';
import './App.css'


function App() {
  const [notes, setNotes]= useState<Note[]>([{
    id:(new  Date).toString(),
    title:"Meetings",
    text:"Scheduled meeting with UI/Ux Team",
     color: "#dfdfdfdf",
    date:(new Date).toString()
  }])

 
  return (
    <>
    < Header/>
    <Container className="mt-5">
      <Row>
        <Col>
        <NoteList notes ={notes} setNotes={setNotes}/>
        </Col>
        <Col>
        <CreateNotes notes ={notes} setNotes={setNotes}/>
        </Col>
      </Row>
    </Container>
    </>
    
  );
}

export default App;
