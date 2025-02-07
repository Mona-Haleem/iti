import User from "../user.js";

describe("Test User class checkout method is working correctly",()=>{
    
    let user , paymentService , deliveryService;
    beforeEach(()=>{
        user = new User('XXX','YYY' ,'ZZZ');
        paymentService = jasmine.createSpyObj("paymentService",["setPaymentInfo","returnBack","isVerified"]);
        deliveryService = jasmine.createSpyObj("deliveryService",["shipping"]);

    })
    
    it("should correctly call paymentService methods",()=>{
        user.checkout(paymentService, deliveryService);
        expect(paymentService.setPaymentInfo).toHaveBeenCalled();
        expect(paymentService.returnBack).toHaveBeenCalled();
    })

    it("should call deliveryService shipping methods if isVerfied is true",()=>{
        
        paymentService.isVerified.and.returnValue(false);
        user.checkout(paymentService, deliveryService);
        expect(deliveryService.shipping).not.toHaveBeenCalled();

        paymentService.isVerified.and.returnValue(true);
        user.checkout(paymentService, deliveryService);
        expect(deliveryService.shipping).toHaveBeenCalled();   
    })

})