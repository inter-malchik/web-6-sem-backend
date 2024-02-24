"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public', 'ITMO_IS-3-year-WEB-frontend-main'));
    const DEFAULT_PORT = 700;
    await app.listen(configService.get('PORT') || DEFAULT_PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map