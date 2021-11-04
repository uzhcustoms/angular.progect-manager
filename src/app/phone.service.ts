import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
// import { Brand, Phone } from '../models/phone.models';
import { catchError, map, tap } from 'rxjs/operators';


// @Injectable({
//   providedIn: 'root'
// })
// export class PhoneService {


  //private brends: Brand[] = [
  //  {
  //    id: 1, name: 'Acer', phones: [
  //      {
  //        id: 11, name: 'beTouch E110', ram: 4
  //      },
  //      {
  //        id: 12, name: 'beTouch E120', ram: 6
  //      },
  //      {
  //        id: 13, name: 'Liquid Metal', ram: 8
  //      }
  //    ]
  //  } as Brand,
  //  {
  //    id: 2, name: 'Apple', phones: [
  //      {
  //        id: 21, name: 'iPhone 4', ram: 2, frontFlesh: false, touchID: 6
  //      },
  //      {
  //        id: 22, name: 'iPhone 4S', ram: 3, frontFlesh: false, touchID: 6
  //      },
  //      {
  //        id: 23, name: 'Iphone 5', ram: 5, frontFlesh: false, touchID: 6
  //      },
  //      {
  //        id: 24, name: 'Iphone 9', ram: 8, frontFlesh: true, touchID: 6
  //      },
  //      {
  //        id: 25, name: 'Iphone 10S', ram: 12, frontFlesh: true, touchID: 6
  //      }
  //    ]
  //  },
  //  {
  //    id: 3, name: 'Siemens', phones: [
  //      {
  //        id: 31, name: 'C81', ram: 3
  //      },
  //      {
  //        id: 32, name: 'EL71', ram: 5
  //      },
  //      {
  //        id: 33, name: 'P51', ram: 5
  //      },
  //      {
  //        id: 34, name: 'CF61', ram: 12
  //      }
  //    ]
  //  },
  //  {
  //    id: 4, name: 'HTC', phones: [
  //      {
  //        id: 41, name: '7 Mozart', ram: 2
  //      },
  //      {
  //        id: 42, name: 'Advantage X7500', ram: 3
  //      }
  //    ]
  //  },
  //  {
  //    id: 5, name: 'Huawei', phones: [
  //      {
  //        id: 51, name: 'Ascend D1 Quad', ram: 2
  //      },
  //      {
  //        id: 52, name: 'Ascend P1', ram: 3
  //      },
  //      {
  //        id: 53, name: 'Ascend G300 U8815', ram: 5
  //      }
  //    ]
  //  },
  //  {
  //    id: 6, name: 'LG', phones: [
  //      {
  //        id: 61, name: 'A120', ram: 2
  //      },
  //      {
  //        id: 62, name: 'KF600', ram: 3
  //      }
  //    ]
  //  },
  //  {
  //    id: 7, name: 'Motorola', phones: [
  //      {
  //        id: 71, name: 'A1000', ram: 2
  //      },
  //      {
  //        id: 72, name: 'Atrix 4G', ram: 3
  //      },
  //      {
  //        id: 73, name: 'Aura', ram: 5
  //      },
  //      {
  //        id: 74, name: 'Backflip', ram: 8
  //      }
  //    ]
  //  },
  //  {
  //    id: 8, name: 'Samsung', phones: [
  //      {
  //        id: 81, name: 'S8+', ram: 2
  //      },
  //      {
  //        id: 82, name: 'S10', ram: 3
  //      },
  //      {
  //        id: 83, name: 'S20+', ram: 5
  //      }
  //    ]
  //  },
  //  {
  //    id: 9, name: 'Xiaomi', phones: [
  //      {
  //        id: 91, name: 'Mi A1', ram: 4, frontFlesh: false, touchID: 5
  //      },
  //      {
  //        id: 92, name: 'Mi 11', ram: 12, frontFlesh: true, touchID: 6
  //      }
  //    ]
  //  },
  //  {
  //    id: 10, name: 'Nokia', phones: [
  //      {
  //        id: 101, name: '1110', ram: 2
  //      },
  //      {
  //        id: 102, name: '1616', ram: 3
  //      },
  //      {
  //        id: 103, name: '2100', ram: 5
  //      },
  //      {
  //        id: 104, name: '2323 Classic', ram: 8
  //      },
  //      {
  //        id: 105, name: '2720 fold', ram: 12
  //      }
  //    ]
  //  },
  //];




// діюча система
  // private brendUrl = './assets/brand.json';
  // private phonetUrl = './assets/phone-list.json';

  // constructor(private http: HttpClient) {

  // }
  
  // getPhones(): Observable<Phone[]> {
  //   return this.http.get<Phone[]>(this.phonetUrl).pipe(
  //     tap(data => { }),
  //     catchError(this.handleError)
  //   );
  // }

  // private handleError(err: HttpErrorResponse) {
  //   // in a real world app, we may send the server to some remote logging infrastructure
  //   // instead of just logging it to the console
  //   let errorMessage = '';
  //   if (err.error instanceof ErrorEvent) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     errorMessage = `An error occurred: ${err.error.message}`;
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong,
  //     errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  //   }
  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }




  //getAllBrands(): Brand[] {
  //  return this.brends;
  //}

  /*
   public getHttpData<T>(queryName: string, objectTypeId?: number): Observable<T> {
    this.queryName = queryName;
    if (objectTypeId) { this.objectTypeId = objectTypeId; } else { this.objectTypeId = null; }
    return this.http.get<T>(this.url, this.getRequestHeaders()).pipe<T>(
      catchError(e => throwError(e))
    );
  }

   
public getObjectTypeNames(currentTypeId:number) {
    return this.gisEndpoint.getHttpData<ObjectType[]>('objectTypes',).pipe(
    map((objectTypes: ObjectType[]) => {
      return objectTypes.map((objectType: ObjectType) => { if (currentTypeId != objectType.id) return objectType.tableName; });
    }));
  }

*/
 




// діючі методи
//   getBrand() {
//     return this.getHttpData<Brand[]>(this.brendUrl).pipe<Brand[]>(
//       map(
//       (brands: Brand[]) => {
//           return brands.map((brand: Brand) => new Brand(brand))
//       }
//       )
//     );
//   }
//   public getHttpData<T>(url: string): Observable<T> {
//     return this.http.get<T>(url).pipe<T>(
//       catchError(e => throwError(e))
//     );
//   }
// }


