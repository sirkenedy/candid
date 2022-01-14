import { createParamDecorator, ExecutionContext, ParseIntPipe } from "@nestjs/common";


export interface IAddFilesToBodyArgs {
    paramName: Array<string>,
}

export const AddFilesToBody = createParamDecorator ((args: IAddFilesToBodyArgs, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();

    args.paramName.forEach(param => {
        console.log("p", param);
        if(req.files[param]) req.body[param] = req.files[param][0].path
        console.log(req.body[param])
        // if(req.files[param]) req.body[param] = req.files[param][0].filename
    })

    return req;
});