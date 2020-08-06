import React from 'react';
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import './styles.css';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';


function TeacherList () {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                <Select name="subject"
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
                            options={[
                                {value: '0', label: 'Domingo'},
                                {value: '1', label: 'Segunda-feira'},
                                {value: '2', label: 'Terça-feira'},
                                {value: '3', label: 'Quarta-feira'},
                                {value: '4', label: 'Quinta-feira'},
                                {value: '5', label: 'Sexta-feira'},
                                {value: '6', label: 'Sábado'},
                            ]} />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList