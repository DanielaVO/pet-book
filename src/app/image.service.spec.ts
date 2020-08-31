import { TestBed } from "@angular/core/testing";

import { ImageService } from "./image.service";

describe("ImageService", () => {
  let service: ImageService;

  beforeEach(() => {
    service = new ImageService();
  });

  it("Cuando se inicie la aplicación, debe crear el componente", () => {
    expect(service).toBeTruthy();
  });

  describe("getImages", () => {
    it("Cuando se llame el método entonces debe retornar todas las 5 imágenes", () => {
      const resp = service.getImages();
      expect(resp.length).toBe(5);
    });
  });

  describe("getImage", () => {
    it("Cuando se envíe 3 (Que está dentro de la lista) entonces debe retornar este elemento", () => {
      const testId = 3;
      const image = service.getImage(testId);
      expect(image.brand).toBe("gato");
      expect(image.url).toBe("assets/images/gato1.jpg");
    });
    it("Cuando se envíe 7 (Que no está dentro de la lista) entonces debe retornar indefinido", () => {
      const testId = 7;
      const image = service.getImage(testId);
      expect(image).toBeUndefined();
    });
  });
});
