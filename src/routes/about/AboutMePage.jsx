import Box from "../../components/AboutMe";
import Header from "../../components/Header";
import styles from './AboutMePage.module.css'
import Button from "../../components/Button"
import { Link } from 'react-router-dom'


export default function AbouteMePage() {
    return (
        <>
        <Header title={"Sobre Mim"} subtitle={"It's a-me, Mario!"}/>
        <div className={ styles.container }>
            <Box title={"Minha tragetória"}>

                <p className={ styles.paragraph }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, voluptate. Perspiciatis rerum maiores ea tenetur. Sint ab enim unde, obcaecati fugit, facere nulla error deleniti ratione eaque, recusandae aut voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius id harum blanditiis ex quas deserunt animi consequatur optio praesentium, rerum amet tenetur hic, assumenda autem alias repellendus maxime non nostrum!</p>

                <p className={ styles.paragraph }>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, impedit minima? Repellendus autem in, quam exercitationem a aspernatur placeat animi magni, voluptate incidunt reiciendis eos eligendi. Distinctio recusandae consectetur facilis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur, laudantium veritatis. Molestias id, iusto excepturi debitis doloremque est possimus quis eveniet, alias perspiciatis cum corporis dolores, quas laboriosam assumenda molestiae.</p>
                <p className={ styles.paragraph }>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate modi non quas? Esse voluptatum fugiat dolor! Delectus perferendis pariatur iste alias. Vero et perspiciatis vel libero maiores reiciendis deserunt saepe?</p>
                <p className={ styles.paragraph }>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi quos ullam aliquam iure ea hic, consequuntur fuga odio qui libero nam excepturi labore iste quod minus? Provident nihil libero suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima quibusdam voluptatibus impedit eius excepturi, error itaque repudiandae qui sapiente laborum natus dolorum fuga necessitatibus facere exercitationem sunt consequuntur! A.</p>

                </Box>
            <Box title={"Meus hobbies e interesses"}>
                
                <p className={ styles.paragraph }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus eligendi voluptatibus at ullam laboriosam. Odit, explicabo officiis eum assumenda iusto, id tempore illo perferendis quis libero sequi nemo? Asperiores, rerum.</p>
                <p className={ styles.paragraph }>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus repudiandae iure at pariatur voluptas ipsam totam eveniet odit, cupiditate esse maiores ab placeat, nulla corporis accusantium molestias? Corrupti, vero recusandae.</p>
            </Box>
            <div className={ styles.btnDiv }>
                <Link to={"/Contato"}>
                    <Button text={"Contate-me"}/>
                </Link>
            </div>

        </div>
        </>
    );
}