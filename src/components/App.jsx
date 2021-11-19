// import style from "../styles/App.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Work from "./Work";
import WorkStage from "./WorkStage";
import PortfolioPage from "./PortfolioPage";
import Contact from "./Contact";
import Price from "./Price";
import NotFound from "./NotFound";
import Portfolio from "./Portfolio";
import Send from "./Send";
import Pack from "./Pack";

function App() {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/work" component={Work} />
                    <Route exact path="/work/creative">
                        <WorkStage
                            title="Etap kreatywny"
                            content="Ustalenie potrzeb oraz zapotrzeboania klienta..."
                        />
                    </Route>
                    <Route exact path="/work/time">
                        <WorkStage
                            title="Etap czasowy"
                            content="W tym etapie każda ze stron..."
                        />
                    </Route>
                    <Route exact path="/work/production">
                        <WorkStage
                            title="Etap produkcyjny"
                            content="W naszej firmie mamy trzy główne kroki..."
                        />
                    </Route>
                    <Route exact path="/work/correct">
                        <WorkStage
                            title="Etap poprawek"
                            content="Prezentacja całego projektu oraz jeżeli..."
                        />
                    </Route>
                    <Route exact path="/work/end">
                        <WorkStage
                            title="Etap końcowy"
                            content="Oficjalne przekazanie pełnej strony wraz..."
                        />
                    </Route>
                    <Route path="/portfolio/:page" component={PortfolioPage} />
                    <Route exact path="/portfolio" component={Portfolio} />

                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/contact/send" component={Send} />
                    <Route exact path="/price" component={Price} />
                    <Route exact path="/price/pack1">
                        <Pack
                            header="Pakiet 1"
                            content="jakiś opis"
                            price="1700 PLN + VAT"
                        />
                    </Route>
                    <Route exact path="/price/pack2">
                        <Pack
                            header="Pakiet 2"
                            content="opis"
                            price="1800 PLN + VAT"
                        />
                    </Route>
                    <Route exact path="/price/pack3">
                        <Pack
                            header="Pakiet 3"
                            content="opis"
                            price="2000 PLN + VAT"
                        />
                    </Route>
                    <Route exact path="/price/pack4">
                        <Pack
                            header="Pakiet 4"
                            content="opis "
                            price="300 PLN + VAT"
                        />
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
