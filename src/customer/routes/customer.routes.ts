import { BaseRouter } from "../../shared/router/index.router";
import { CustomerController } from "../controllers/customer.controllers";
import { CustomerMiddleware } from "../middlewares/customer.middleware";
export class CustomerRouter extends BaseRouter<CustomerController, CustomerMiddleware> {
  constructor() {
    super(CustomerController,CustomerMiddleware);
  }
  routes(): void{
    this.router.get('/customers',(req,res) => {
      this.controller.getCustomer(req, res)
    }
    )
    this.router.get('/customers/:id',(req,res) => {
      this.controller.getCustomerById(req,res)
    }
    )
    this.router.post('/createCustomer',(req,res,next)=>this.middleware.CustomerValidator(req,res,next),(req,res) => {
      this.controller.createCustomer(req,res)
    }
    )
    this.router.put('/updateCustomer/:id',(req,res) => {
      this.controller.updateCustomer(req,res)
    }
    )
    this.router.delete('/deleteCustomer/:id',(req,res) => {
      this.controller.deleteCustomer(req,res)
    }
    )
  }
}
