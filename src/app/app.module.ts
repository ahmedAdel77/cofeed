import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccountInfoComponent } from './shared/account-info/account-info.component';
import { HomeComponent } from './home/home.component';
import { OtherComponent } from './home/other/other.component';
import { FeedsComponent } from './home/feeds/feeds.component';
import { FeedComponent } from './home/feeds/feed/feed.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { StoryComponent } from './home/stories/story/story.component';
import { SuggestionsComponent } from './home/other/suggestions/suggestions.component';
import { SuggestionComponent } from './home/other/suggestions/suggestion/suggestion.component';
import { FollowButtonComponent } from './shared/follow-button/follow-button.component';
import { PostActivityComponent } from './home/other/post-activity/post-activity.component';
import { OtherHeaderComponent } from './home/other/other-header/other-header.component';
import { StoriesComponent } from './home/stories/stories.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AccountInfoComponent,
    HomeComponent,
    OtherComponent,
    StoryComponent,
    FeedsComponent,
    FeedComponent,
    SuggestionsComponent,
    SuggestionComponent,
    FollowButtonComponent,
    PostActivityComponent,
    OtherHeaderComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
