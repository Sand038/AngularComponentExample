import {Component, Input, OnInit} from '@angular/core';
import {BlogPost} from '../dtos/blog-post';
import {TruncatePipe} from '../pipes/truncate.pipe';

@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.css']
})
export class BlogPostTileComponent implements OnInit {

  @Input() blogPost: BlogPost;
  fullSummary: string;

  constructor(private truncatePipe: TruncatePipe) {
  }

  ngOnInit() {
    this.fullSummary = this.blogPost.summary;
    this.blogPost.summary = this.truncatePipe.transform(this.blogPost.summary, ['30']);
  }

  expandSummary() {
    this.blogPost.summary = this.fullSummary;
  }

}
