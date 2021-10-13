<sprint :name="'Sprint Two'">

<rubric-section :name="'Links'">
    <p class="text-center text-2xl"><span class="text-green-400">Feature</span> | <span class="text-red-600">Bug</span> | <span class="text-blue-400">Doc</span></p>
    <div class="rubric-content">
        <p><a class="link link-secondary text-green-400" href="https://github.com/cgerard321/champlain_petclinic/pull/91">Add SMTP</a></p>
        <p><a class="link link-secondary text-green-400" href="https://github.com/cgerard321/champlain_petclinic/pull/105">Add mail endpoint</a></p>
        <p><a class="link link-secondary text-green-400" href="https://github.com/cgerard321/champlain_petclinic/pull/105">Integrate mailer</a></p>
        <p><a class="link link-secondary text-blue-400" href="https://github.com/cgerard321/champlain_petclinic/pull/127">Add Swagger</a></p>
        <p><a class="link link-secondary text-blue-400" href="https://github.com/cgerard321/champlain_petclinic/pull/145">Add missing Swagger doc folder</a></p>
        <p><a class="link link-secondary text-red-600" href="https://github.com/cgerard321/champlain_petclinic/pull/146">Fix table names</a></p>
        <p><a class="link link-secondary text-green-400" href="https://github.com/cgerard321/champlain_petclinic/pull/152">Register user</a></p>
        <p><a class="link link-secondary text-green-400" href="https://github.com/cgerard321/champlain_petclinic/pull/159">Email verification on register</a></p>
        <p><a class="link link-secondary text-red-600" href="https://github.com/cgerard321/champlain_petclinic/pull/160">E-mail body not sending</a></p>
    </div>
</rubric-section>

<rubric-section :name="'User Story'">
    <div class="rubric-content">
        <p>I did a pretty good job on the user stories. I decomposed them and added decent acceptance criteria (see below image)</p>
        <p>They were decomposed a LOT better than last sprint, but there is still a lot to do. For example, the registration story was probably too much BUT at least the e-mail verification part of it was a separate story. Progress</p>
        <p>As we saw in the retrospect, the acceptance criteria could be a whole lot better</p>
        <p>
            The story point estimations were good in my opinion. For example, below you can see that for the FULL implementation of the mailer service, I gave 12 story points which I believe to be fair.
            <img src="/images/sprint2_mailer_epic.png"/>
        </p>
    </div>
</rubric-section>

<rubric-section :name="'Version Control'">
    <div class="rubric-content">
        <p>My use of GIT was even better than last time</p>
        <p>
            I started using code comments and asking questions (as opposed to giving commands as per Jason's instructions)
            <img src="/images/sprint2_pull_138_code_comments_example.png">
        </p>
        <p>I followed the correct naming conventions for both branches and PRs, I made my stories on their own branches, and I reviewed other's codes as well as I could and requested changes wherever I felt it was necessary</p>
        <p>I made a whole bunch of commits. My philosophy is "1 change = 1 commit". The reason why is simple: easier cherry-pick, reset, readability. And since we squash before merging, it won't make a big glob of commits on the master branch</p>
    </div>
</rubric-section>

<rubric-section :name="'Test Driven Development'">
    <div class="rubric-content">
        <p>I used TDD to the best of my capabilities</p>
        <p>I always wrote my tests before the implementation (see below image for proof)</p>
        <img src="/images/sprint2_tdd_test_first_commit_history.png"/>
        <p>
            All of my stories have in-depth tests associated with them. You can check any of my PRs and see that I have more lines of test than code (see below image for proof)
            <img src="/images/sprint2_more_test_than_code.png" />
        </p>
        <p>My approach is clearly documented by my commits which you can check by going to my branches commit history. You'll see that the test are always committed prior to the implementation</p>
    </div>
</rubric-section>

<rubric-section :name="'Code'">
    <div class="rubric-content">
        <p>My code meets the criteria put forth in the story's acceptance criteria. This is how I know what to write and when to merge. I always base myself on the AC</p>
        <p>My choice of languages, i.e. Go is, to me, judicious. I chose it because of its speed and simplicity. The main reason I chose it is because of how easy it was to mock an SMTP server for my testing. Plus the Docker image is 33Mbs 😎😎😎</p>
        <p>I did not i18n my stories </p>
        <p>I am 100% certain that the database compiles with the data model as I have extensive persistence tests which rely on FlyWay to migrate in-order to pass PLUS manual tests</p>
        <p>I am certain that the data I handle is sync'd (because of my extensive tests)</p>
        <p>I ensured optimization of DB queries by using the JPABuddy plugin on IntelliJ</p>
    </div>
</rubric-section>

<rubric-section :name="'Security'">
    <div class="rubric-content">
        <p>
            Since I handled register, security played a big role. Firstly, I only exposed the needed routes (i.e. /users) and on those routes, I only exposed the exact HTTP method I needed. See below image
            <img src="/images/sprint2_security_config.png" />
        </p>
        <p>I used DTOs where I felt it was necessary</p>
        <p>One thing I need to improve is the fact that we currently have no UUIDs so we're using the email (which is unique) in some areas which we really shouldn't be because although it is unique, it can change (e.g. a user can change their e-mail)</p>
    </div>
</rubric-section>

<rubric-section :name="'Reviews'">
    <div class="rubric-content">
        <p>I reviewed code as best as I could and ensured my code was reviewed properly by checking in with the reviewers</p>
        <p>When I spotted suspicious code, I pulled and tested locally then checked the JaCoCo report</p>
        <p>
            I added code comments & I started using code comments and asking questions (as opposed to giving commands as per Jason's instructions).
            <img src="/images/sprint2_pull_138_code_comments_example.png" />
        </p>
        <p>I ensured that my reviewers actually reviewed my code by asking questions about it in person after they had reviewed it</p>
        <p>I kept a close eye on the naming of the PRs I reviewed (branch & PR name)</p>
    </div>
</rubric-section>

<rubric-section :name="'E2E Tests'">
    <div class="rubric-content">
        <p>There are no E2E tests for this sprint as Selenium was added to the project today (10/12/2021)</p>
    </div>
</rubric-section>

<rubric-section :name="'Deployment'">
    <div class="rubric-content">
        <p>I am 100% sure that my story can be deployed through the CI/CD pipelines we have set-up</p>
        <p>
            I added a GitHub action for my new mailer service (because it uses Go) to ensure that the code works before merging it into the master branch.
            <image src="/images/sprint2_go_github_action.png" />
        </p>
        <p>
            I found and fixed the issue with the Docker Gradle version (thanks Shariful for actually implementing the fix ❤️)
            <image src="/images/sprint2_docker_gradle_version.png" />
        </p>
    </div>
</rubric-section>

<rubric-section :name="'Scrum Roles'">
    <div class="rubric-content">
        <p>I did not have a special scrum role</p>
        <p>I was, thankfully, not bombarded with questions this sprint</p>
        <p>I am very happy with my PO's (Jeremy) performance</p>
        <p>I am dissatisfied with my SM's (Arianne) performance. The stand-ups were either not planned or if planned not followed through. Even when we HAD the stand-ups, the SM would have a 1-on-1 with each of us rather than sitting us down at a round-table. I tried pointing it out but nothing changed.</p>
        <p>🎊I am happy to report though that the SM took minutes without me having to ask for it🎊</p>
    </div>
</rubric-section>

<rubric-section :name="'Progress'">
    <div class="rubric-content">
        <p>I performed pretty well this spring. I fulfilled what I committed to and then some. I also unblocked my teammates wherever I could by spending hours on calls explaining concepts, giving them resources to research more, and even giving full on lectures</p>
        <p>I should have divided the tasks better. I should have made more configuration stories to avoid overextending my stories' bounds</p>
    </div>
</rubric-section>

<rubric-section :name="'Extra'">
    <div class="rubric-content">
        <p>I had a more product focused mindset, going out of MY service's scope to better the product as a whole</p>
    </div>
</rubric-section>
</sprint>
