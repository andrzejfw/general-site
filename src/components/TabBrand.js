import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';



export default class extends React.Component{
    constructor() {
      super();
      this.state = { tabIndex: 0 };
    }
    render() {
      return (
        <Tabs>
            <TabList>
                <Tab>Food</Tab>
                <Tab>Ice Cream</Tab>
                <Tab>Beaty</Tab>
                <Tab>Home Care</Tab>
            </TabList>

            <TabPanel>
            <p>
                <b>Mario</b> (<i>Japanese: マリオ Hepburn: Mario, [ma.ɾʲi.o]</i>) (<i>English:
                /ˈmɑːrioʊ/; Italian: [ˈmaːrjo]</i>) is a fictional character in the Mario video
                game franchise, owned by Nintendo and created by Japanese video game designer
                Shigeru Miyamoto. Serving as the company's mascot and the eponymous protagonist
                of the series, Mario has appeared in over 200 video games since his creation.
                Depicted as a short, pudgy, Italian plumber who resides in the Mushroom
                Kingdom, his adventures generally center upon rescuing Princess Peach from the
                Koopa villain Bowser. His younger brother and sidekick is Luigi.
            </p>
            </TabPanel>
            <TabPanel>
            <p>
                <b>Luigi</b> (<i>Japanese: ルイージ Hepburn: Ruīji, [ɾɯ.iː.dʑi̥]</i>) (<i>English: /luˈiːdʒi/;
                Italian: [luˈiːdʒi]</i>) is a fictional character featured in video games and related media
                released by Nintendo. Created by prominent game designer Shigeru Miyamoto, Luigi is portrayed
                as the slightly younger but taller fraternal twin brother of Nintendo's mascot Mario, and
                appears in many games throughout the Mario franchise, often as a sidekick to his brother.
            </p>
            </TabPanel>
            <TabPanel>
            <p>
                <b>Princess Peach</b> (<i>Japanese: ピーチ姫 Hepburn: Pīchi-hime, [piː.tɕi̥ çi̥.me]</i>)
                is a character in Nintendo's Mario franchise. Originally created by Shigeru Miyamoto,
                Peach is the princess of the fictional Mushroom Kingdom, which is constantly under
                attack by Bowser. She often plays the damsel in distress role within the series and
                is the lead female. She is often portrayed as Mario's love interest and has appeared
                in Super Princess Peach, where she is the main playable character.
            </p>
            </TabPanel>
            <TabPanel>
            <p>
                <b>Yoshi</b> (<i>ヨッシー Yosshī, [joɕ.ɕiː]</i>) (<i>English: /ˈjoʊʃi/ or /ˈjɒʃi/</i>), once
                romanized as Yossy, is a fictional anthropomorphic dinosaur who appears in
                video games published by Nintendo. Yoshi debuted in Super Mario World (1990) on the
                Super Nintendo Entertainment System as Mario and Luigi's sidekick. Yoshi later starred
                in platform and puzzle games, including Super Mario World 2: Yoshi's Island, Yoshi's Story
                and Yoshi's Woolly World. Yoshi also appears in many of the Mario spin-off games, including
                Mario Party and Mario Kart, various Mario sports games, and Nintendo's crossover fighting
                game series Super Smash Bros. Yoshi belongs to the species of the same name, which is
                characterized by their variety of colors.
            </p>
            </TabPanel>
        </Tabs>
      );
    }
  }