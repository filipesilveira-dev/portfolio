import { Accordion } from "../accordeon/Accordion";

export function Skills(){
    return(
        <Accordion title="Skills">
            <div className="content">
                <div className="skills">
                    <section className="tools">
                        <h3>Ferramentas:</h3>
                        <ul id="profile.skills.hardSkills">
                        </ul>
                    </section>

                    <section className="personal">
                        <h3>Pessoal:</h3>
                        <ul id="profile.skills.softSkills">
                            <li>Carregando...</li>
                            <li>Carregando...</li>
                            <li>Carregando...</li>
                        </ul>
                    </section>
                </div>
            </div>
        </Accordion>
    )
}