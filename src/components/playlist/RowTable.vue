<template>
	<tr>
		<td>{{index+1}}</td>
		<td>
			<img :src="item.thumbnails" alt />
		</td>
		<td>{{item.title}}</td>
		<td>
			<div class="buttons" v-if="format.length">
				<div v-for="(data, index) in format" :key="index">
					<template v-if="type == 'mp4'">
						<a
							:href="data.url"
							target="_blank"
							:id="data.id"
							class="button is-small is-success mr-3"
							v-if="data.id == 138"
						>8K ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
						<a
							:href="data.url"
							target="_blank"
							:id="data.id"
							class="button is-small is-success mr-3"
							v-if="data.id == 266"
						>4K ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
						<a
							:href="data.url"
							target="_blank"
							:id="data.id"
							class="button is-small is-success mr-3"
							v-if="data.id == 264"
						>2K ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
						<a
							:href="data.url"
							target="_blank"
							:id="data.id"
							class="button is-small is-success mr-3"
							v-if="data.id == 137"
						>1080p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
						<a
							:href="data.url"
							target="_blank"
							:id="data.id"
							class="button is-small is-success mr-3"
							v-if="data.id == 22"
						>720p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
						<a
							:href="data.url"
							target="_blank"
							:id="data.id"
							class="button is-small is-success mr-3"
							v-if="data.id == 135"
						>480p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
						<a
							:href="data.url"
							target="_blank"
							:id="data.id"
							class="button is-small is-success mr-3"
							v-if="data.id == 18"
						>360p ({{(data.size / 1024 / 1024).toFixed(2)}} MB)</a>
					</template>
				</div>
			</div>
            <div v-else>
                <p><small>fetching..</small></p>
            </div>
		</td>
	</tr>
</template>

<script>
import { api_cors_anywhere, api_youtube } from "../../env";
import axios from "axios";
export default {
	props: ["item", "index", "type"],
	data() {
		return {
			format: [],
		};
	},
	mounted() {
		this.fetchData();
	},
	methods: {
		fetchData() {
			axios
				.get(`${api_cors_anywhere}${api_youtube}${this.item.url}`)
				.then((response) => {
					if (!response.data.status) {
						console.log("Error Fetching Data...");
						return;
					}
					this.format = response.data.format;
				})
				.catch((e) => {
					console.log("Something went wrong: " + e);
				});
		},
	},
};
</script>