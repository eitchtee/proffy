import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';

import api from '../../services/api';

import './styles.css';


function TeacherList () {
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    async function searchTeachers(e: FormEvent) {
        e.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={searchTeachers}>
                <Select name="subject"
                            value={subject}
                            onChange={e => {setSubject(e.target.value)}}
                            label="Matéria"
                            options={[
                                {value: 'Artes', label: 'Artes'},
                                {value: 'Matemática', label: 'Matemática'},
                                {value: 'Biologia', label: 'Biologia'},
                                {value: 'Ciências', label: 'Ciências'},
                                {value: 'Física', label: 'Física'},
                                {value: 'Quimíca', label: 'Quimíca'},
                                {value: 'Português', label: 'Português'},
                                {value: 'Redação', label: 'Redação'},
                                {value: 'Geometria', label: 'Geometria'},
                                {value: 'Sociologia', label: 'Sociologia'},
                                {value: 'Filosofia', label: 'Filosofia'},
                                {value: 'História', label: 'História'},
                            ]} />
                    <Select name="week-day"
                            label="Dia da semana"
                            value={week_day}
                            onChange={e => {setWeekDay(e.target.value)}}
                            options={[
                                {value: '0', label: 'Domingo'},
                                {value: '1', label: 'Segunda-feira'},
                                {value: '2', label: 'Terça-feira'},
                                {value: '3', label: 'Quarta-feira'},
                                {value: '4', label: 'Quinta-feira'},
                                {value: '5', label: 'Sexta-feira'},
                                {value: '6', label: 'Sábado'},
                            ]} />
                    <Input value={time}
                            onChange={e => {setTime(e.target.value)}}
                            type="time" name="time" label="Hora" />

                    <button type="submit">Buscar</button>
                </form>
            </PageHeader>

            <main>
                {teachers.map(teacher => {
                    return (<TeacherItem />)
                })}
            </main>
        </div>
    )
}

export default TeacherList