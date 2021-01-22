import {ExcelComponent} from '@core/ExcelComponent';
import {createTable} from '@/components/table/table.template.js'

export class Table extends ExcelComponent {
  static className = 'excel__table'

  toHTML() {
    // eslint-disable-next-line no-undef
    return createTable()
  }
}