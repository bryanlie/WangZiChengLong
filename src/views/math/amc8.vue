<template>
    <Navbar />

    <v-container>
        <v-row>
            <v-col cols="12">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <h2 class="display-1">American Mathematics Competitions (AMC) 8</h2>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <h3 class="display-2">What mathematical concepts are covered in AMC 8?</h3>
                        <p class="body-1">
                            The AMC 8, designed for middle school students (grades 8 and below), tests a variety of mathematical concepts from a typical middle school curriculum. Here's a breakdown of the topics you can expect to encounter:
                        </p>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <h3 class="display-2">Core Areas:</h3>
                        <ul>
                            <li class="body-1">
                                <strong>Arithmetic and Logic:</strong> This includes basic operations (addition, subtraction, multiplication, division), order of operations, applying mathematical properties (commutative, associative, distributive), understanding divisibility rules, and solving problems using logic and reasoning.
                            </li>
                            <li class="body-1">
                                <strong>Number Theory:</strong> This might involve prime factorization, greatest common divisor (GCD), least common multiple (LCM), working with modular arithmetic (clock problems), exploring number sequences, and understanding basic properties of different number sets (integers, fractions, decimals).
                            </li>
                            <li class="body-1">
                                <strong>Algebraic Word Problems:</strong> The AMC 8 might present word problems requiring translating written descriptions into mathematical equations or inequalities using variables. These problems could involve solving for unknowns or analyzing relationships between variables.
                            </li>
                        </ul>
                    </v-col>
                </v-row>

                <v-row>
                    <v-col cols="12">
                        <h3 class="display-2">Additional Topics:</h3>
                        <ul>
                            <li class="body-1">
                                <strong>Counting and Probability:</strong> This could involve counting techniques (combinations, permutations), determining probabilities of simple events, and applying basic probability concepts to solve problems.
                            </li>
                            <li class="body-1">
                                <strong>Estimation, Patterns, and Proportional Reasoning:</strong> The AMC 8 might assess your ability to estimate quantities, identify and extend patterns, and solve problems involving ratios and proportions.
                            </li>
                            <li class="body-1">
                                <strong>Elementary Geometry:</strong> Expect questions on geometric shapes (lines, angles, triangles, quadrilaterals, circles), geometric properties (area, perimeter, volume), applying the Pythagorean Theorem, and basic spatial visualization problems.
                            </li>
                            <li class="body-1">
                                <strong>Reading and Interpreting Graphs and Tables:</strong> You might be required to interpret information presented in graphs (bar charts, line graphs, pie charts) and tables, draw conclusions from the data, and solve problems based on the information provided.
                            </li>
                        </ul>
                    </v-col>
                </v-row>
            </v-container>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-row>
            <v-col cols="12">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <h2 class="display-1">AMC 8 Preparation Tips</h2>
                            <ul>
                                <li class="body-1">
                                    Official AMC 8 preparation tips from the Mathematical Association of America (MAA). <a href="https://maa.org/math-competitions/amc-8" target="_blank">MAA AMC 8</a>
                                </li>
                                <li class="body-1">
                                    A collection of AMC 8 problems and their solutions on the Art of Problem Solving (AoPS) website. <a href="https://artofproblemsolving.com/wiki/index.php/AMC_8_Problems_and_Solutions" target="_blank">AMC 8 Problems and Solutions</a>
                                </li>
                                <li class="body-1">
                                    Additional AMC 8 preparation resources and tips from Ivy League Education Center. <a href="https://ivyleaguecenter.org/2017/09/26/4554/" target="_blank">18 Sets of Past Official AMC 8 Tests with Answer Keys</a> 
                                </li>
                            </ul>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>

    <v-container>
        <v-row>
            <v-col cols="12">
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <h2 class="display-1">Books with links</h2>
                            <ul style="list-style: none;">
                                <li class="body-1">
                                    <v-row align="center">
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <v-img src="../../assets/aopsPrealg.jpg" contain height="300"/>
                                        </v-col>
                                        <v-col cols="12" md="6" class="pl-md-2">
                                            <p>The Art of Problem Solving (AoPS) series is highly regarded for math competition preparation, encompassing essential topics for the AMC 8, such as number theory, combinatorics, and geometry. The Prealgebra book, in particular, stands out as an invaluable resource for beginners in algebra. It not only introduces fundamental concepts but also offers an extensive collection of practice problems, complete with detailed solutions, to enhance understanding and problem-solving skills.
                                             <a href="https://www.amazon.com/Prealgebra-Richard-Rusczyk/dp/1934124214" target="_blank">AoPS Prealgebra Amazon book</a></p>
                                        </v-col>
                                    </v-row>
                                </li>
                                <li class="body-1">
                                    <v-row align="center">
                                        <v-col cols="12" md="2" class="pr-md-2">
                                            <v-img src="../../assets/amc8prep.jpg" contain height="300"/>
                                        </v-col>
                                        <v-col cols="12" md="6" class="pl-md-2">
                                            <p>The AMC Preparatuib series is meticulously crafted to equip students for the AMC 8, with each of the seven volumes focusing on a distinct subject area—ranging from algebra and number theory to combinatorics—featured in the competition. Beyond presenting a wealth of practice problems, the series ensures comprehensive preparation by providing solutions to all questions. Each chapter is structured to foster understanding and mastery: it begins with a section on fundamental skills and knowledge, illustrated with ample examples, followed by approximately 30 exercise problems, and concludes with detailed solutions to enhance problem-solving capabilities.
                                             <a href="https://www.amazon.com/American-Mathematics-Competitions-AMC-Preparation/dp/150061419X" target="_blank">AMC 8 Preparation Amazon book</a></p>
                                        </v-col>
                                    </v-row>                                
                                </li>
                          
                            </ul>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </v-container>

    <Footer />
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
    name: 'AMC8',
    components: {
        Navbar, Footer
    },
};
</script>

<style scoped>

</style>
