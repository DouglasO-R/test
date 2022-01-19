import Express from "express";
import ExpressAdapter from "../../adapter/Express";
import { ExchangeController } from "../../controller/ExchangeController";

const app = Express();

app.get('/api', ExpressAdapter.exchange(ExchangeController.Exchange));

app.get('/', (req, res, next) => {
    const { from, to, value, coation } = req.query;
    res.status(200).send({ from, to, value, coation });
});



app.listen(3000, () => console.log('api started'));