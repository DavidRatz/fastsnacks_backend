import createError from 'http-errors';
import express from 'express';
import bodyParser from "body-parser";
import { join } from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import * as url from 'url';

import indexRouter from './routes/index.js';
import clientRouter from './routes/client.js';
import orderRouter from './routes/order.js';
import orderProductRouter from './routes/orderProduct.js';
import productRouter from './routes/product.js';
import productFriterieRouter from './routes/productFriterie.js';
import friterieRouter from './routes/friterie.js';
import stateRouter from './routes/state.js';
import categoryRouter from './routes/category.js';
import roleRouter from './routes/role.js';

var app = express();

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// view engine setup
app.set('views', join(__dirname, 'views'));
app.set('view engine', 'jade');

//app.use(logger('dev'));
app.use(bodyParser.json());
//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/client', clientRouter);
app.use('/order', orderRouter);
app.use('/orderProduct', orderProductRouter);
app.use('/product', productRouter);
app.use('/productFriterie', productFriterieRouter);
app.use('/friterie', friterieRouter);
app.use('/state', stateRouter);
app.use('/category', categoryRouter);
app.use('/role', roleRouter);

// catch 404 and forward to error handler
/* app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
}); */

export default app;
