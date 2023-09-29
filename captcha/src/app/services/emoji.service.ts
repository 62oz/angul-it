import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {
  constructor(private http: HttpClient) { }
  static readonly API_KEY = "9ef48cc23abf0ed0a4be6e58396fb004764a115f"
  static readonly base_url = "https://emoji-api.com/"

  fetchCategories(): Observable<string[]> {
    return this.http.get<any[]>(EmojiService.base_url + "categories?access_key=" + EmojiService.API_KEY).pipe(
      map(categories => categories.map(category => category.slug)),
      catchError(error => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  fetchEmojisInRandomCategory(count: number): Observable<string[]> {
    return this.fetchCategories().pipe(
      switchMap(categories => {
        let randomCategory = categories[Math.floor(Math.random() * categories.length)];
        return this.http.get<any[]>(EmojiService.base_url + "categories/" + randomCategory + "?access_key=" + EmojiService.API_KEY).pipe(
          map(emojis => {
            let randomEmojis: string[] = [];
            for (let i = 0; i < count; i++) {
              let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
              randomEmojis.push(randomEmoji.character);
            }
            return randomEmojis;
          }),
          catchError(error => {
            console.error(error);
            return throwError(() => error);
          })
        );
      })
    );
  }

  fetchRandomEmojis(count: number): Observable<string[]> {
    return this.http.get<any[]>(EmojiService.base_url + "emojis?access_key=" + EmojiService.API_KEY).pipe(
      map(emojis => {
        let randomEmojis: string[] = [];
        for (let i = 0; i < count; i++) {
          let randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
          randomEmojis.push(randomEmoji.character);
        }
        return randomEmojis;
      }),
      catchError(error => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}
