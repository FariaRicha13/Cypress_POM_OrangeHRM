import { pimPage } from "../pages/pimPage.cy";
const pim = new pimPage()
export class pimTestRunner {
  pimTestRunner() {

  }
  pimBeforeAdd() {
    pim.clickAdd()
  }
}